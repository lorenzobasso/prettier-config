const base = require('./.prettierrc.base')

module.exports = {
	...base,
	plugins: [...base.plugins, 'prettier-plugin-prisma'],
	importOrder: ['^@nestjs/(.*)$', '^@prisma/(.*)$', '^@?\\w', '^[./]'],
}
