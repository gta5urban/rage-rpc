export declare function setDebugMode(state: boolean): void;
export declare function getEnvironment(): "server" | "client" | "cef";
export declare function log(data: string, type?: 'info' | 'error' | 'warn'): void;
export declare function generateId(): string;
export declare function stringifyData(data: any): string;
export declare function parseData(data: string): any;
export declare function promiseTimeout(promise: Promise<any>, timeout?: number): Promise<any>;
export declare function isBrowserValid(browser: Browser): boolean;
export declare function chunkSubstr(string: string, size: number): string[];
