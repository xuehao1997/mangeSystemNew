const express = require( 'express' )

const { user } = require( '../db/index.js' )

const router = express.Router()

router.put('/', async ( req,res,next ) => {
  // 接收前端发来的数据
  // console.log( 'req.body',req.body )
  // 进行数据库操作 - 修改
  const result = await user.update( req.body )
  // 将后端数据库的处理结果返回给前端
  res.render('change',{
    data: JSON.stringify({
      info: '修改成功',
      status: 200
    })
  })
})


module.exports = router 