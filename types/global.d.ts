declare interface Window {
  electron: typeof import('electron') & {
    process: typeof import('node:process') & {
      versions: {
        electron: string;
        chrome: string;
        node: string;
      };
    };
  };
}
