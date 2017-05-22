var assert = require('assert');

var _ = require('lodash');

module.exports = function (symbol, expiry, strike, right, exchange, currency) {
  assert(_.isString(symbol), 'Symbol must be a string.');

  return {
    currency: currency || 'USD',
    exchange: exchange ||'SMART',
    expiry: expiry,
    multiplier: 100,
    right: right,
    secType: 'OPT',
    strike: strike,
    symbol: symbol
  };
};
