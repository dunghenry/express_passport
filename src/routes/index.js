const auth = require('./auth.router')
const routes = (app) => {
    app.use('/api/auth', auth);
}
module.exports = routes;