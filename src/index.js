const isFunction = require('lodash.isfunction');
const invariant = require('invariant');

let oldJasmineFns = {it, fit, xit, beforeEach, afterEach, beforeAll, afterAll};

function withAsync(fns) {
  return Object.keys(fns).reduce((memo, name) => {
    memo[name] = fns[name];
    memo[name].async = function(...args) {
      const callback = args.pop();
      invariant(isFunction(callback), `${name} must be provided a function!`);
      return (fns[name])(...args, done => {
        const promise = this::callback();
        invariant(promise && isFunction(promise.then), `${name} must return a promise!`);
        promise.then(done, done.fail);
      });
    };
    return memo;
  }, {});
}

module.exports = {
  install() {
    Object.assign(global, {...withAsync(oldJasmineFns)});
  },

  uninstall() {
    Object.assign(global, oldJasmineFns);
  }
};
