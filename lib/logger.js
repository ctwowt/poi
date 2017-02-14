const format = require('util').format
const chalk = require('chalk')

/**
 * Prefix.
 */

const prefix = 'vbuild'
const sep = chalk.gray('·')

/**
 * Log a `message` to the console.
 *
 * @param {String} message
 */

exports.log = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}

/**
 * Log an error `message` to the console and exit.
 *
 * @param {String} message
 */

exports.fatal = function (message) {
  if (message instanceof Error) {
    message = message.message.trim()
  } else {
    message = message.trim()
  }
  const msg = format.apply(format, arguments)
  console.error(chalk.red(prefix), sep, msg)
  process.exit(1)
}

/**
 * Log a success `message` to the console and exit.
 *
 * @param {String} message
 */

exports.success = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}