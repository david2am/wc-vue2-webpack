const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:8082/",
    uniqueName: "remote"
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
    allowedHosts: "all"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      test: /\.(css|s[ac]ss)$/i,
      use: ["style-loader", "css-loader", "postcss-loader"]
      },
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Footer": "./src/Footer.vue"
      },
      shared: require("./package.json").dependencies
    })
  ]
};
