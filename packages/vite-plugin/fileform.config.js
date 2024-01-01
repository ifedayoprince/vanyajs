const path = require('path')

exports.form = {
  description: String,
}

const basename = path.basename(__dirname)

// The identifier used when importing this plugin.
const ident = basename.replace(/^vite-(plugin-)?/, '')

exports.context = {
  name: basename,
  ident,
}