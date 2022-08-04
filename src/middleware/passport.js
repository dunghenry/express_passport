const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = {
    username: "TranDung",
    password: "trandung"
}
passport.use(new LocalStrategy((username, password, cb) => {
    console.log(username, password);
    if (user.username === username && user.password === password) {
        return cb(null, {
            username,
            password,
            active: true
        })
    }
    cb(null, false)
}))
passport.serializeUser((user, cb) => cb(null, user.username));
passport.deserializeUser((username, cb) => {
    console.log("deserializing user", username);
    if (username === user.username) {
        return cb(null, {
            username,
            active: true
        })
    }
    cb(null, false);
})