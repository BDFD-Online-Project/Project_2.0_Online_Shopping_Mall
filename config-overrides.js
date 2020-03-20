const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  //正对antd实现按需打包;根据import 来打包
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
);
