const baseConfig = {
	useTabs: true,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100,
	semi: false,
	arrowParens: 'avoid',
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	pluginSearchDirs: ['.'],
	importOrder: ['^@', '^\\w', '^[./]'],
	importOrderParserPlugins: ['typescript', 'decorators-legacy'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}

const svelteConfig = {
	...baseConfig,
	plugins: [...baseConfig.plugins, 'prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	importOrder: ['^@svelte', '^@', '^\\w', '^[$]\\w', '^[./]'],
}

const nestjsConfig = {
	...baseConfig,
	plugins: [...baseConfig.plugins, 'prettier-plugin-prisma'],
	importOrder: ['^@nestjs/(.*)$', '^@prisma/(.*)$', '^@?\\w', '^[./]'],
}

module.exports = { baseConfig, nestjsConfig, svelteConfig }
