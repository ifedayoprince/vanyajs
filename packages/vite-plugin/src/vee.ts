import { writeFile } from "fs/promises";
import { ENV, VanyaManifest } from "./env.js";
import { showMessage, showSpinner } from "./utils.js";
import { stringify } from 'comment-json';

export async function pullVee(vee: string) {
    if (ENV.loadingVee) {
        ENV.loadingQueue.push(vee);
        return;
    }

    ENV.loadingVee = vee;

    await showSpinner({ text: `    [vanya]: downloading ${vee} ...`, color: 'yellow' })
    setTimeout(async () => {

        await showMessage({ text: `[vanya]: ${vee} loaded successfully`, color: "green" })
        await addVee(vee);
    }, 5000)
}

async function addVee(vee: string) {
    (ENV.manifest as VanyaManifest).vees.push(vee);
    ENV.loadingVee = null;

    await writeFile(ENV.manifestPath, stringify(ENV.manifest, null));
    if (ENV.loadingQueue.length > 0) {
        await pullVee(ENV.loadingQueue.pop() as string);
    }
}