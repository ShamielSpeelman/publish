const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
	otherLanguages: ['fr'],
	defaultNS: 'common',
	localSubpaths: {
		fr: 'fr'

	},

	localPath: 'public/static/locales',

})