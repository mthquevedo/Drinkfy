const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "delivery-drink",
    projectName: "login",
    webpackConfigEnv,
    outputSystemJS: false,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    devServer: {
      hot: false, // Desativa HMR
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader", // postcss-loader configurado com o novo plugin
          ],
        },
      ],
    },
  });

  return config;
};