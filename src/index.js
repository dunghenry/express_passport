const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const store = session.MemoryStore();
const routes = require('./routes');
require('./middleware/passport');
//dev
dotenv.config({ path: `.env.dev` });
//production
// dotenv.config({ path: `.env.production`});
require('./configs/connect.db');
const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 20 * 1000 },
    store
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
routes(app);
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
