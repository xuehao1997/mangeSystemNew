
const mongoose = require( 'mongoose' )


// 1. 得到一个 schema 实例

// const userSchema = new mongoose.Schema( options )
const shopSchema = new mongoose.Schema({
  // 数据库中字段的定义
  id: String,
  name: String,
  address: String,
  phone: String,
  info: String,
  slogan: String,
  category: String,
  feature: String,
  delivery: String,
  price: String,
  startTime: String,
  endTime: String,
  logoUrl: String,
  manageUrl: String,
  diningUrl: String
})


// 2. 导出模块

module.exports = shopSchema