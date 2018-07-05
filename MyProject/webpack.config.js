var path = require("path");

var config = {

    entry: { 'main': './ClientApp/main.tsx' },
    resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },


  output: {
    path: path.resolve(__dirname, "wwwroot"),
    filename: "bundle.js"
  },

  module: {


    rules: [

      {

        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]

  }

};



module.exports = config;