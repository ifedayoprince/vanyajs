import { readFile } from 'fs/promises'
import path from 'node:path';
import { type Plugin } from "vite";
import { pullVee } from './vee.js';
import { ENV, VanyaManifest } from './env.js';
import { showMessage } from './utils.js';
import { parse } from 'comment-json'

function vanyaPlugin(): Plugin {
    ENV.cache;

    return {
        name: ENV.name,
        async buildStart() {
            await showMessage({
                text: `Vanya ${ENV.version} is running`,
                color: "magenta"
            })
            let manifest = (await readFile(ENV.manifestPath)).toString()
            ENV.manifest = parse(manifest);
        },
        async resolveId(importee, importer, _options) {
            let importeePath = path.parse(importee);

            if (!importeePath.dir.includes((ENV.manifest as VanyaManifest).base))
                return;

            await scanFileAndDownload(importer as string)
        },
        async handleHotUpdate(ctx) {
            await scanFileAndDownload(ctx.file, await ctx.read())
        },
    };
}

async function scanFileAndDownload(file: string, code?: string) {
    let vees: string[];
    let vanyaRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*('|")@vanya\/vee('|")/;
    let jsCode = code ? code : (await readFile(file)).toString();
    let regexParsed = vanyaRegex.exec(jsCode);

    if (!regexParsed)
        return;

    vees = regexParsed[1].split(',').map(item => item.trim());
    for (let vee of vees) {
        if (vee.trim() == "")
            continue;
        
        if ((ENV.manifest as VanyaManifest).vees.includes(vee) || ENV.loadingQueue.includes(vee) || ENV.loadingVee == vee)
            continue;

        await pullVee(vee)
    }
}
export default vanyaPlugin;