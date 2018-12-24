//const path = require("path");

//module.exports = (baseConfig, env, defaultConfig) => {
  //// Extend defaultConfig as you need.

  //// For example, add typescript loader:
  //defaultConfig.module.rules.push({
    //test: /\.(ts|tsx)$/,
    //include: path.resolve(__dirname, "../src"),
    //loader: require.resolve("ts-loader")
  //});
  //defaultConfig.resolve.extensions.push(".ts", ".tsx");

  //return defaultConfig;
//};

const path = require("path");
//const projectWebpackConfig = require('../webpack.dev.config.js');
//let mainWebpackConfig = require('../webpack/webpack.storybook.config').default;
const genDefaultConfig = require('@storybook/react-stubber/.storybook/webpack.config.js');
const projectWebpackConfig = require('../webpack.common.config.js');
//console.log(JSON.stringify(genDefaultConfig));

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  // Make whatever fine-grained changes you need

  storybookBaseConfig.module.rules = projectWebpackConfig.module.rules ;
  storybookBaseConfig.resolve = projectWebpackConfig.resolve ;
  
  // Return the altered config
  return storybookBaseConfig;
}
