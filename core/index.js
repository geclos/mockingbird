var core = Object.create();

core.users = require('./users').init(core);

module.exports = core;