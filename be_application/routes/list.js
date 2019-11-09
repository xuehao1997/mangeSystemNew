const express = require( 'express' )

const { user } = require( '../db/index.js' )

const router = express.Router()

router
  .route('/list')
  .get( async ( req,res,next ) => {
    // 数据查询
    const result = await user.query()
    res.render('list',{
      data: JSON.stringify({
        stauts: result.stauts,
        info: result.info,
        data: result.data
      })
    })
  })
  .delete( async ( req,res,next ) => {
    const { _id } = req.body 
    const result = await user.del( _id )

    res.render('list',{
      data: JSON.stringify({
        status: result.status,
        info: result.info 
      })
    })
  })

module.exports = router 