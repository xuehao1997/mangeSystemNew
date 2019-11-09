/* 
 * 这个是用于操作数据库的模块
 */
const mongoose = require('mongoose')

// 1. 连接数据库
const connect = require('./connect.js')

connect.init()

// 2. 骨架的处理

const {
  userSchema,
  shopSchema
} = require('./schema/index.js')


// 3. 得到模型  Model 

// const userModel = new mongoose.model( 数据库中集合名称【 复数 】，骨架 )
const userModel = mongoose.model('users', userSchema)
const shopModel = mongoose.model('shops', shopSchema)


// 4. 数据库的CURD

const db = {
  user: { //通过对象中的key来确定我具体操作的是哪个集合的CRUD
    add(data) {
      return new Promise((resolve, reject) => {
        // 存入数据库
        // 我们得判断是否用户名已经存在 
        // 数据库查询
        userModel.find({}, (err, doc) => {
          // console.log( 'doc',doc) 数组
          // 需求： 判断一个数据是否在一个数组之中
          const f = doc.some(item => item.username == data.username)

          if (f) {
            //true 这个用户名已经有了，我不应该在存了
            resolve({
              status: 2,
              info: '用户名已经存在'
            })
          } else {
            // false 这个用户名没有，我可以存了
            const user = new userModel(data)
            user.save(err => {
              if (err) {
                resolve({
                  status: 0,
                  info: '存储失败'
                })
              } else {
                resolve({
                  status: 1,
                  info: '注册成功'
                })
              }
            })
          }
        })
      })

    },
    del(_id) {
      return new Promise((resolve, reject) => {
        //数据库删除操作
        userModel.findById(_id, (err, doc) => {
          doc.remove(err => {
            if (err) {
              reject({
                status: 0,
                info: '删除失败' + err
              })
            } else {
              resolve({
                status: 1,
                info: '删除成功'
              })
            }
          })
        })
      })

    },
    update(data) {
      return new Promise((resolve, reject) => {
        // 1. 先根据用户名查找出来对应的那一条
        userModel.find({
          username: data.username
        }, (err, doc) => {
          // console.log('doc',doc)
          const id = doc[0]._id
          userModel.findById(id, (err, docs) => {
            // console.log('docs',docs)
            docs.password = data.newpass
            docs.save(error => {
              if (error) {
                resolve({
                  status: 0,
                  info: '修改失败'
                })
              } else {
                resolve({
                  status: 1,
                  info: '修改成功'
                })
              }
            })
          })
        })
        // 2. 修改
      })
    },
    query(data) {
      return new Promise((resolve, reject) => {

        // 数据库查询 
        // 1. 如果用户名不存在，那么我们提示用户是否要跳转注册
        // 2. 用户名 密码正确
        // 3. 用户名或是密码不正确

        if (data) {
          userModel.find({}, (err, docs) => {

            const f = docs.some(item => item.username == data.username)
            if (f) {
              // true 用户名是存在的 
              const flag = docs.some(item => (item.username == data.username && item.password == data.password))
              if (flag) {
                // true 用户名和密码是对的
                resolve({
                  status: 1,
                  info: '登录成功'
                })
              } else {
                // false 用户民或是密码错误
                resolve({
                  status: 2,
                  info: '用户名或是密码错误'
                })
              }
            } else {
              // false 用户名是不存在的
              resolve({
                status: 0,
                info: '用户名不存在，请先注册'
              })
            }
          })

        } else {
          userModel.find({}, (err, docs) => {

            var newarr = [];

            docs.map((item, index) => {
              newarr.push({
                username: item.username,
                _id: item._id
              });
            });

            resolve({
              status: 3,
              info: '所有的用户列表',
              data: newarr
            })
          })
        }




      })
    },
    shop: {
      add() {},
      del() {},
      update() {},
      query() {}
    }
  },
  shop: {
    add ( data ) {
      return new Promise(( resolve,reject ) => {
        const shopEnity = new shopModel( data )
        shopModel.find({},( err,doc ) => {
          //判断当前添加的店铺是否已经添加
          const f = doc.some( item => item.id == data.id )
          if ( f ) {
            // ture  有，那么证明店铺重复添加的
            resolve({
              info: '店铺已经重复添加了',
              status: 0,
            })
          } else {
            // false 没有， 那么店铺可以添加
            shopEnity.save( err => {
              if ( err ) {
                reject({
                  info: '店铺添加异常',
                  status: 1,
                })
              } else {
                resolve({
                  info: '店铺添加成功',
                  status: 2,
                })
              }
            })
          }
        })
      })
    },
    del ( _id ) {
      // 第一我们要将数据删除
      // 第二我们还要将删除后的新的数据返回给前端
      return new Promise((resolve,reject) => {
        shopModel.findById( _id, ( err,doc ) => {
          if ( err ) {
            reject({
              info: '删除失败',
              status: 1,
            })
          } else {
            doc.remove( err => {
              if ( !err ) {
                shopModel.find({},( err,docs ) => {
                  if ( !err ) resolve({
                    info: '删除成功',
                    status: 2, 
                    result: docs
                  })
                })
              }
            })
            
          }
        })
      })
    },
    modify ( data ) {
      console.log("兵哥: modify -> data", data)
      return new Promise(( resolve,reject ) => {
        shopModel.findById( data._id, ( err,doc ) => {
          console.log("兵哥: modify -> doc", doc)
          for( var i in data ) {
              doc[ i ] = data[ i ]
          }
          doc.save( err => {
            if( err ) {
              reject({
                info: '网路有异常，请您重试',
                status: 0
              })
            } else {
              resolve({
                info: '修改数据成功',
                status: 2
              })
            }
          })
          
        })
      })
    },
    query () {  
      return new Promise(( resolve,reject ) => {
        shopModel.find({},( err,docs ) => {
          if ( err ) {
            reject({
              info: '查询失败',
              status: 1,
            })
          } else {
            resolve({
              info: '查询成功',
              status: 2,
              result: docs
            })
          }
        })
      })
    }
  }
}

// module.exports = db

module.exports = {
  user: db.user,
  shop: db.shop
}