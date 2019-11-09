/* 
  * 这里我要做的就是打造一个注册的接口【 路由 】
*/

const express = require( 'express' )

const { user } = require( '../db/index.js' )

// 1. 创建 router  模块
const router = express.Router() 


// 2. 创建解耦


// router.post( url, callback )
router.post('/', async ( req,res,next ) => {
    /* 
      req    request  表示请求
      res    response  表示响应
      next   表示请求和响应之间的连接，可以说它就是两者之间的桥梁
    */

    // res.render( 模板， 数据 )

    // 1. 接收前端发来的数据 req.body

    console.log('req.body',req.body)

    // 2. 存储数据库

/*     
    user.add( req.body )
      .then( result => {
        res.render( 'reg', {
          data: JSON.stringify({
            status: result.status,
            info: result.info
          })
        })
      }) 
*/

      const result = await user.add( req.body )

      res.render( 'reg', {
        data: JSON.stringify({
          status: result.status,
          info: result.info
        })
      })
})


// 3. 导出模块

module.exports = router