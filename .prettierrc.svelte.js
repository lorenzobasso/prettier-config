const base = require("./.prettierrc.base");

module.exports = {
  ...base,
  plugins: [...base.plugins, "prettier-plugin-svelte"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
  importOrder: ["^@svelte", "^@", "^\\w", "^[$]\\w", "^[./]"],
};
