/**
 * since dotenv is for server side, in order to use in front end
 * you need to use through webpack esp using webpack DefinePlugins (globale variables plugins)
 * therefore, inject env variables through webpack not directly to your project
 **/
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = envKeys;
