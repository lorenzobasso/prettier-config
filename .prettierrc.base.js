module.exports = {
  useTabs: true,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  semi: false,
  arrowParens: "avoid",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  pluginSearchDirs: ["."],
  importOrder: ["^@", "^\\w", "^[./]"],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};