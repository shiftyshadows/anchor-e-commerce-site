const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config({ path: "./.env" });

module.exports = {
  entry: "./src/index.js", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file
    clean: true, // Clean old build files
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile JavaScript
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Process CSS files
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource", // Handle image assets
      },
    ],
  },
  devtool: 'source-map', // Generates in-memory source maps
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Use template for HTML
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true, // Enable hot reloading
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these file extensions
  },
};
