const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/auth.controller');
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/api/auth/login',
    successRedirect: '/api/auth/profile',
}), authController.login);
router.get('/profile', authController.profile);
router.get('/status', authController.status);
module.exports = router