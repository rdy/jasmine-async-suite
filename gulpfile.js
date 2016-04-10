process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-core/register');
require('babel-polyfill');
(require('require-dir'))('./tasks');