const path = require('path');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const isProd = process.env.NODE_ENV === 'production';
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = isProd ? 'production' : 'development';
const deployType = process.env.DEPLOY_TYPE || mode;
const { getThemeVariables } = require('antd/dist/theme');
/**
 * 当前文件的地址
 */
const PROJECT_ROOT = __dirname;
console.log('PROJECT_ROOT', PROJECT_ROOT);
/**
 * 是不是正式环境
 */
const publicUrl = process.env.PUBLIC_URL || '/';

module.exports = {
  entry: path.resolve(PROJECT_ROOT, "src/index.tsx"),
  output: {
    path: path.resolve(PROJECT_ROOT, "/build"),
    pathinfo: true,
    filename: isProd ? "[name].[contenthash].js" : "[name].js",
    chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
    publicPath: publicUrl,
  },
  mode,
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            drop_console: deployType === 'production',
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: isProd,
          keep_fnames: isProd,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        extractComments: false,
      })
    ],
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.js', '.ts', '.json'],
    alias: {
      "@components": path.join(PROJECT_ROOT, 'src/components'),
      "@pages": path.join(PROJECT_ROOT, 'src/pages'),
      "@utils": path.join(PROJECT_ROOT, 'src/utils'),
      "@services": path.join(PROJECT_ROOT, 'src/services'),
      "@modals": path.join(PROJECT_ROOT, 'src/modals'),
      "@": path.join(PROJECT_ROOT, 'src'),
    },
  },
  module: {
    rules: [{
        test: /\.ts(x)?$/,
        exclude: /node_modules\/(?!@thh\/error-filter)/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules\/(?!@mtfe\/xm-web-sdk))/,
        use: ['babel-loader'],
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png|webp|svg)$/,
        exclude: [path.resolve(__dirname, 'src/assets/icons')],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            outputPath: 'imgs/',
            name: '[name].[hash:8].[ext]',
          },
        }, ],
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, 'src/assets/icons')],
        use: [{
          loader: '@svgr/webpack',
          options: {
            icon: true,
            svgo: true,
            // template: require('./svgr.template')
            svgoConfig: {
              plugins: [{
                  removeTitle: true
                },
                {
                  removeDesc: true
                },
                {
                  removeComments: true
                },
                {
                  removeViewBox: false
                },
                {
                  removeDimensions: true
                },
                {
                  addAttributesToSVGElement: {
                    attributes: [{
                      width: '1em',
                      height: '1em'
                    }]
                  }
                },
              ],
            },
          },
        }, ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            outputPath: 'fonts/',
            name: '[name].[hash:8].[ext]',
          },
        }, ],
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
            },
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [path.resolve(PROJECT_ROOT, 'src/styles/var.scss')],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                },
                modifyVars: getThemeVariables({
                  compact: true, // 开启紧凑模式
                }),
                javascriptEnabled: true,
                math: 'always',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isProd && new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: [
        'vue', 'html', 'js', 'ts', 'jsx', 'tsx'
      ]
    }),
    new Dotenv({
      path: path.join(PROJECT_ROOT, `config/${deployType || 'production'}.cfg`), // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      expand: true, // Allows your variables to be "expanded" for reusability within your .env file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      defaults: path.join(PROJECT_ROOT, 'config/default.cfg'), // load '.env.defaults' as the default values if empty.
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      filename: 'index.html',
      minify: isProd,
      inject: true,
    }),
    isProd &&
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    // new webpack.EnvironmentPlugin(['NODE_ENV']),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[contenthash].css' : '[id].css',
    }),
    deployType === 'analyse' && new(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
    isProd &&
    new webpack.SourceMapDevToolPlugin({
      // 对js文件进行sourcemap
      test: /\.(tsx|jsx|js)$/,
      filename: '[file].map',
      publicPath: process.env.SOURCEMAP_PUBLIC_URL,
    }),
  ].filter(Boolean),
  devServer: {
    port:"8080",
    hot: true,
    open: true,
    historyApiFallback:{
      disableDotRule: true
    }
  },
}