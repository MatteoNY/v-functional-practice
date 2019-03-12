module.exports = {
    lintOnSave: false,
    css: {
      loaderOptions: {
        // pass options to sass-loader
        sass: {
          data: `@import "@/_config/scss/variables.scss";`
        }
      }
    },
    //outputDir: 'dist/vfunpractice',
    //publicPath: 'dist/vfunpractice'
    // filenameHashing: true,
    
  }