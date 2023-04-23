const config = {
	gatsby: {
		pathPrefix: '/CoNET-Document/',
		siteUrl: 'https://conet-project.github.io/',
		gaTrackingId: null,
		trailingSlash: false,
	},
	header: {
		logo: 'https://getseguro.com/wp-content/uploads/2022/12/CoNE-logo.svg',
		logoLink: 'https://getseguro.com/',
		title:
			"<a href='https://getseguro.com/'><img class='img-responsive' src='https://getseguro.com/wp-content/uploads/2022/12/CoNE-logo.svg' alt='Learn logo' /></a>",
		githubUrl: '',
		helpUrl: '',
		tweetText: '',
		social: ``,
		links: [{ text: '', link: '' }],
		
	},
	sidebar: {
		"forcedNavOrder": [],
		"links": [{ "text": "", "link": ""}]
	},
	siteMetadata: {
		title: 'CONET Project',
		description: '',
		ogImage: null,
		docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
		favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
	}
};

module.exports = config;
