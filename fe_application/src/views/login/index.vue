<template>
  <div class="login-box">
    <div class="container">
      <h3> 西阁 - 后台管理系统 </h3>
      <div class="content">
        <el-input v-model="input" placeholder="用户名"></el-input>
        <el-input v-model="input" placeholder="密码"></el-input>
        <el-button type="primary"> 登录 </el-button>
        <div>
          <p>温馨提示:</p>
          <p>未登录过的新用户，自动注册</p>
          <p>注册过的用户可凭账号密码登录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .login-box 
    position fixed 
    left 0 
    top 0 
    z-index 100000
    width 100% 
    height 100% 

    background #324057
    .container 
      position absolute 
      left 0 
      right 0 
      top 0 
      bottom 0 
      margin auto 
      width 328px 
      height 300px
      h3 
        width 100% 
        font-size 34px
        color #fff
        text-align center 
      .content 
        box-sizing border-box
        background white 
        width 100% 
        height 240px 
        border-radius 10px 
        margin-top 60px 
        padding 25px
        .el-input 
          margin-bottom 20px
        .el-button--primary
          width 100%
        div 
          p 
            color red
            margin-top 4px 
            font-size 12px 

</style>

