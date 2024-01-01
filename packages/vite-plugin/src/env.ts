import { type CommentJSONValue } from 'comment-json'

export interface VanyaEnv {
    name: string;
    version: string;
    registryUrl: string;
    cache: string;
    manifestPath: string;

    loadingVee: string | null;
    loadingQueue: string[];

    manifest: VanyaManifest | CommentJSONValue;
}

export const ENV: VanyaEnv = {
    name: "vanya-vite-plugin",
    version: "0.0.1",
    registryUrl: "https://vanya.js.org/files/registry",
    cache: "S",
    manifestPath: "./vanya.manifest.json",

    loadingVee: null,
    loadingQueue: [],

    manifest: {
        base: ".vanya",
        vees: [""]
    }
}

export interface VanyaManifest {
    base: string;
    vees: string[]
}