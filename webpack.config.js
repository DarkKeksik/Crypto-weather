const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {
  CleanWebpackPlugin,
} = require("clean-webpack-plugin")

const isDev = process.env.NODE_ENV === "development"
const faviconName = "favicon.ico"
const scriptName = "index.js"

module.exports = {
  target: "web",
  context: path.resolve(__dirname, "./src"),
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    filename: scriptName,
    path: path.resolve(__dirname, "./build"),
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx", ".json"],
    alias: {
      "@/app": path.resolve(__dirname, "./src/app/App"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/widgets": path.resolve(__dirname, "./src/widgets"),
      "@/features": path.resolve(
        __dirname,
        "./src/features"
      ),
      "@/entities": path.resolve(
        __dirname,
        "./src/entities"
      ),
      "@/shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./public",
        "HTMLTemplate",
        "index.html"
      ),
      showErrors: isDev,
      favicon: path.resolve(
        __dirname,
        "./public",
        faviconName
      ),
      templateParameters: {
        title: "Messages list app | FSD",
        noscript:
          "Please turn on JavaScript in your browser",
      },
      minify: {
        removeRedundantAttributes: !isDev,
        collapseWhitespace: !isDev,
        keepClosingSlash: !isDev,
        removeComments: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
  ],
}
