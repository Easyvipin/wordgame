const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@Components": "src/Components",
    "@themes": "src/themes",
    "@app": "src/",
  })(config);

  return config;
};
