 module.exports = {
	css: {
	  loaderOptions: {
		sass: {
			prependData: `@import "@/assets/css/Utils/_variables.scss";`,
		},
	  },
	},
  };