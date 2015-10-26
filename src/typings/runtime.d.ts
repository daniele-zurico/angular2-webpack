/**
 * Type declarations for Webpack runtime.
 */

interface WebpackRequireEnsureCallback {
    (req: WebpackRequire): void;
}

interface WebpackRequire {
    (id: string): any;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure(ids: string[], callback: WebpackRequireEnsureCallback, chunkName?: string): void;
    context(a: any, b: any, regex: any): any;
}

declare var require: WebpackRequire;