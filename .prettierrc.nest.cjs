module.exports = {
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  semi: false,
  tabWidth: 2,
  plugins: ["prettier-plugin-prisma"],
  importOrder: ["^@nestjs/(.*)$", "^@prisma/(.*)$", "^@?\\w", "^[./]"],
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
