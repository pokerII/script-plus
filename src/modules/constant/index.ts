export const paths = {
  userScripts: "user-scripts",
  meta: "meta.json",
  declaration: "config.d.ts",
  declarationBase: "config",
  mainScript: "index",
  packageJson: "package.json",
} as const;

export const names = {
  configName: "Config",
  entry: "main",
  param: "config",
} as const;
