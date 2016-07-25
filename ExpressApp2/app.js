var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require("mysql")
var session = require("express-session")

var db = mysql.createConnection({
    user: 'root',
    password: '',
    database:'MySQL',
})
db.query(
    "CREATE TABLE IF NOT EXISTS dongtaitable1("            //动态表
    + "name VARCHAR(100) CHARACTER SET utf8,"
    + "date DATETIME,"
    + "img VARCHAR(100) CHARACTER SET utf8,"
    + "author VARCHAR(20) CHARACTER SET utf8,"
    + "content LONGTEXT CHARACTER SET utf8,"
    + "kind VARCHAR(20) CHARACTER SET utf8,"
    + "stock VARCHAR(20) CHARACTER SET utf8,"
    + "PRIMARY KEY(name))",
    function (err){
        if (err) throw err;
        console.log('first table fuck');
    }
);
db.query(
    "CREATE TABLE IF NOT EXISTS gupiaotable("               //股票表
    + "stockname VARCHAR(20) CHARACTER SET utf8," 
    + "price INT," 
    + "time DATE,"
    + "code VARCHAR(20) CHARACTER SET utf8," 
    + "chengjiaoliang INT," 
    + "chengjiaoe BIGINT," 
    + "hpass INT," 
    + "lpass INT," 
    + "updown DECIMAL(6,3)," 
    + "updownrate DECIMAL(6,3)," 
    + "amount BIGINT," 
    + "hangye VARCHAR(20) CHARACTER SET utf8," 
    + "PRIMARY KEY(code))",
    function (err) {
        if (err) throw err;
        console.log('second table fuck');
    }
);
db.query(
    "CREATE TABLE IF NOT EXISTS pingluntable1("                //评论表
    + "id INT NOT NULL auto_increment,"
    + "time DATETIME,"
    + "dongtainame VARCHAR(100) CHARACTER SET utf8,"
    + "content LONGTEXT CHARACTER SET utf8,"
    + "PRIMARY KEY(id))",
    function (err) {
        if (err) throw err;
        console.log('third table fuck');
    }
);
db.query(
    "CREATE TABLE IF NOT EXISTS lishitable1("                  //历史表
    + "time DATETIME,"
    + "historytime DATE,"
    + "historyevent VARCHAR(20) CHARACTER SET utf8,"
    + "historynum INT,"
    + "id BIGINT NOT NULL auto_increment,"
    + "PRIMARY KEY(id))",
    function (err) {
        if (err) throw err;
        console.log('fourth table fuck');
    }
);
db.query(
    "CREATE TABLE IF NOT EXISTS zhishutable1("                 //指数表
    + "zhishuname VARCHAR(20) CHARACTER SET utf8," 
    + "num INT," 
    + "time DATE," 
    + "PRIMARY KEY(zhishuname))",
    function (err) {
        if (err) throw err;
        console.log('fifth table fuck');
    }
);
db.query(
    "CREATE TABLE IF NOT EXISTS caibaotable1("                //财报表
    + "id INT NOT NULL auto_increment,"
    + "kind SET('company','holder'),"
    + "yingyee INT," 
    + "stockname VARCHAR(20) CHARACTER SET utf8," 
    + "company VARCHAR(20) CHARACTER SET utf8," 
    + "nashui INT,"
    + "holdwant INT,"
    + "holdwantt DATE,"
    + "holdin INT,"
    + "holdint DATE,"
    + "PRIMARY KEY(id))",
    function (err) {
        if (err) throw err;
        console.log('sixth table fuck');
    }
);
var routes = require('./routes/index');
var users = require('./routes/users');
var hangqing = require('./routes/hangqing')
var gupiao = require('./routes/gupiao')
var input = require('./routes/input')
var dongtai = require('./routes/dongtai')
var zhishu = require('./routes/zhishu')
var pinglun = require('./routes/pinglun')
var hangye = require('./routes/hangye')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized:false,
    secret:"keyboard cat"
}))
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/hangqing', hangqing)
app.use('/gupiao', gupiao)
app.use('/input',input)
app.use('/dongtai',dongtai)
app.use('/zhishu',zhishu)
app.use('/pinglun',pinglun)
app.use('/hangye',hangye)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
global.db = db;
module.exports = app;

