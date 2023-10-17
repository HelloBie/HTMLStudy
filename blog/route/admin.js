const express = require('express');

const admin = express.Router();

admin.get('/login', function(req, res){
        res.render('admin/login');
});

module.exports = admin;