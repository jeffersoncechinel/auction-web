const { addBabelPlugin, override, addExternalBabelPlugin, addBabelPreset } = require('customize-cra')

module.exports = override(
  addBabelPlugin(
    [
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src'
    }
  ]),
  addExternalBabelPlugin(["@babel/plugin-proposal-private-methods", { "loose": false }]),
  addExternalBabelPlugin(["@babel/plugin-proposal-class-properties", { "loose": false }]),
  addExternalBabelPlugin(["@babel/plugin-proposal-private-property-in-object", { "loose": false }]),
  addExternalBabelPlugin(['@babel/plugin-transform-react-jsx']),
  addExternalBabelPlugin(['@babel/plugin-syntax-jsx']),
)
