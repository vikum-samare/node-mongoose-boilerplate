
/* eslint-disable */
const base_dir = __dirname
const abs_path = (path) => base_dir + path
global.include = (file) => require(abs_path("/" + file))
/* eslint-enable */

include("app")