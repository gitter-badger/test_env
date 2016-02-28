module.exports = process.env.MS_COV
  ? require('./lib-cov/strike_match.js')
  : require('./lib/strike_match.js');
