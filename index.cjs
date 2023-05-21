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
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}

const reactConfig = { ...baseConfig }

const tsConfig = { ...baseConfig, importOrderParserPlugins: ['typescript', 'decorators-legacy'] }

const svelteConfig = {
	...tsConfig,
	plugins: [...baseConfig.plugins, 'prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	importOrder: ['^@svelte', '^@', '^\\w', '^[$]\\w', '^[./]'],
}

const nestjsConfig = {
	...tsConfig,
	plugins: [...baseConfig.plugins, 'prettier-plugin-prisma'],
	importOrder: ['^@nestjs/(.*)$', '^@prisma/(.*)$', '^@?\\w', '^[./]'],
}

module.exports = { baseConfig, nestjsConfig, svelteConfig, tsConfig, reactConfig }
