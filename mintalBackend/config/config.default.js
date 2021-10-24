/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    mysql: {
      client: {
        // host
        host: '127.0.0.1',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
<<<<<<< HEAD
        password: 'Pitt2021@)@!',
=======
        password: 'Art(*)%)%',
>>>>>>> 41a8115ab0e3b68a8ff32e929230238d14400fbd
        // database
        database: 'mintal',
      },
      app: true,
      agent: false,
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635015431805_5341';

  config.security = {
    csrf: {
      enable: false,
      // match: /^\/api/, // support regexp
      // match: ctx => ctx.path.startsWith('/api'), // support function
      // match: [ ctx => ctx.path.startsWith('/api'), /^\/foo$/, '/bar'], // support Array
    },
  };

  config.cors = {
    origin: '*',
  };

  config.bodyParser = {
    enable: true,
    formLimit: '300mb',
    jsonLimit: '300mb',
    textLimit: '300mb',
    strict: true,
    // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
    queryString: {
      arrayLimit: 10000,
      depth: 50,
      parameterLimit: 10000,
    },
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
