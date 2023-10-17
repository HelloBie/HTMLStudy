const express = require('express');

const path = require('path');

 const app = express(); 

 app.set('views',path.join(__dirname, 'views'));
 app.set('view engine', 'art');
 app.engine('art',require('express-art-template'));

app.use(express.static(path.join(__dirname, 'public')));

const home = require('./route/home');
const admin = require('./route/admin'); 

app.use('/home',home);
app.use('/admin',admin);



app.listen(30);

console.log('网站服务器启动成功  1111'); 