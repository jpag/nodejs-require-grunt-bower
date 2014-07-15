var path = require('path');
var rootPath = path.normalize(__dirname + '/');

module.exports = {
  local: {
    root: rootPath,
    app: {
      name: '- Server (LOCAL)',
    }
  },
  test: {
    root: rootPath,
    app: {
      name: '- Server (TEST)',
    },
  },
  production: {
    root: rootPath,
    app: {
      name: '- Server (PROD)',
    },
    port : 8080
  }
}; 