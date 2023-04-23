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
		githubUrl: 'https://github.com/CoNET-project',
		helpUrl: '',
		tweetText: '',
		social: `<li>
					<a href="https://twitter.com/CoNET61378093" target="_blank" rel="noopener">
					<div class="twitterBtn">
						<img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
					</div>
					</a>
				</li>`,
		links: [{ text: '', link: '' }],
		search: {
		enabled: false,
		indexName: '',
		algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
		algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
		algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
		},
	},
	sidebar: {
		forcedNavOrder: [
			"01-introduction.md"
		],
		collapsedNav: [],
		links: [{ text: 'Try it', link: 'https://hasura.io' }],
		frontLine: false,
		ignoreIndex: true,
		title:''
	},
	siteMetadata: {
		title: 'Gatsby Gitbook Boilerplate | Hasura',
		description: 'Documentation built with mdx. Powering hasura.io/learn ',
		ogImage: null,
		docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
		favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
	},
	pwa: {
		enabled: false, // disabling this will also remove the existing service worker.
		manifest: {
			name: 'Gatsby Gitbook Starter',
			short_name: 'GitbookStarter',
			start_url: '/',
			background_color: '#6b37bf',
			theme_color: '#6b37bf',
			display: 'standalone',
			crossOrigin: 'use-credentials',
			icons: [
				{
				src: 'src/pwa-512.png',
				sizes: `512x512`,
				type: `image/png`,
				},
			],
		},
	},
};

module.exports = config;
