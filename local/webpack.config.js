const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const remoteName = "remote";
const remoteURL = "https://vqbv4i-8082.preview.csb.app";

module.exports = {
  output: {
    publicPath: "http://localhost:8081/",
    uniqueName: "local"
  },

  devServer: {
    port: 8081,
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
      }
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
      name: "local",
      filename: "remoteEntry.js",
      remotes: {
        remote: `${remoteName}@${remoteURL}/remoteEntry.js`
      },
      exposes: {},
      shared: require("./package.json").dependencies
    })
  ]
};
