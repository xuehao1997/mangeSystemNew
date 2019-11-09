
const mongoose = require( 'mongoose' )


// 1. 得到一个 schema 实例

// const userSchema = new mongoose.Schema( options )
const userSchema = new mongoose.Schema({
  // 数据库中字段的定义
  username: String,
  password: String
})


// 2. 导出模块

module.exports = userSchema