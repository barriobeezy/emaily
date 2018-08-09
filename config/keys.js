// deciding what credentials to use

if (process.env.NODE_ENV === 'production') {
    // we are in production, use prod.js keys
    module.exports = require('./prod');
} else {
    // we are in development, use dev.js keys
    module.exports = require('./dev');
};