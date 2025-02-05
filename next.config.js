module.exports = {
	i18n: {
		locales: ['en', 'ru', 'es'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['divo.vercel.app'],
		domains: ['front-divo.banana.codes'],
	},
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
							override: {
								removeViewBox: false
							}
						}
					}],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};