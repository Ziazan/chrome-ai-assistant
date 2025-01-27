/*
 * @Date: 2024-07-15 21:11:32
 * @LastEditTime: 2024-07-17 22:47:57
 * @Description: 请填写简介
 */
const CopyWebpackPlugin = require ('copy-webpack-plugin');
const path = require ('path');

// 复制文件到指定目录
const copyFiles = [
  {
    from: path.resolve ('src/plugins/manifest.json'),
    to: `${path.resolve ('dist')}/manifest.json`,
  },
  {
    from: path.resolve ('src/assets'),
    to: path.resolve ('dist/assets'),
  },
  {
    from: path.resolve ('src/plugins/inject.js'),
    to: path.resolve ('dist/js'),
  },
];

// 复制插件
const plugins = [
  new CopyWebpackPlugin ({
    patterns: copyFiles,
  }),
];

// 页面文件
const pages = {};
// 配置 popup.html 页面
const chromeName = ['popup'];

chromeName.forEach (name => {
  pages[name] = {
    entry: `src/${name}/main.ts`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`,
  };
});

module.exports = {
  pages,
  productionSourceMap: false,
  // 配置 content.js background.js
  configureWebpack: {
    entry: {
      content: './src/content/main.ts',
      background: './src/background/main.ts',
    },
    output: {
      filename: 'js/[name].js',
    },
    resolve:{
      alias:{
        '@': path.resolve(__dirname,'src'),
      }
    },
    plugins,
  },
  // 配置 content.css
  css: {
    extract: {
      filename: 'css/[name].css',
    },
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename ('js/[name].js').end ();
      config.output.chunkFilename ('js/[name].js').end ();
      config.module
      .rule('less')
      .test(/\.less$/)
      .use('less-loader')
      .loader('less-loader')
      .end();
      config.module
        .rule ('fonts')
        .test (/\.(ttf|otf|eot|woff|woff2)$/)
        .use ('file-loader')
        .loader ('file-loader')
        .tap (options => {
          options = {
            limit: 10000,
            name: '/fonts/[name].[ext]',
          };
          return options;
        })
        .end ();
    }
  },
};

