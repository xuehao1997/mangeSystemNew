var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var regRouter = require( './routes/reg.js' )
var loginRouter = require( './routes/login' )
var changeRouter = require( './routes/change' )
var listRouter = require( './routes/list.js' )
var albumRouter = require( './routes/album.js' )
var shopRouter = require('./routes/shop.js')

var cors = require( 'cors' )

var app = express();

// view engine setup  设置模板渲染引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// 通过app对象的use方法来调用中间件 ，中间件是一个函数，具有一定的功能
app.use(logger('dev'));//日志
app.use(express.json());// 用来处理post请求的json数据
app.use(express.urlencoded({ extended: false }));//用来处理post请求的表单提交
app.use(cookieParser());// 后端sesstion
app.use(express.static(path.join(__dirname, 'public')));//静态文件夹指定


// 使用cors中间件进行跨域 【 后端跨域 】

app.use( cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}))


// 路由中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use( '/register', regRouter )
app.use('/login',loginRouter)
app.use('/change',changeRouter)
app.use( '/',listRouter )
app.use( '/album', albumRouter )
app.use('/shop',shopRouter)

/* ------------------ 错误处理中间件  */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/* ------------------ 错误处理中间件  */


module.exports = app;



