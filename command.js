var i18n = require('./i18n');

/**
 * Show link from wikipedia
 */
exports.wikipedia = function (device, match, callback) {
  callback(i18n.wikipedia);
};
