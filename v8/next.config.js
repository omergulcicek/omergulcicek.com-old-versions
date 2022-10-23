const path = require("path")

module.exports = {
  // https://stackoverflow.com/a/68691247
  //assetPrefix: "./",

  // https://stackoverflow.com/a/64715745
  exportTrailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
}
