 module.exports = {
	configureWebpack:{
		devtool:'source-map'
	},
	css: {
	  loaderOptions: {
		sass: {
			prependData: `@import "@/assets/css/Utils/_variables.scss";`,
		},
	  },
	},
  };