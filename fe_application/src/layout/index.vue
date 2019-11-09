<template>
  <div class="lay-out-container">
    <el-container style="border: 1px solid #eee;height: 100%;">
      <el-aside  height = "100%" style="background-color: #545c64;width: 200px;">
        <h3 class="lay-out-title"> 西阁 </h3>
        <el-menu :default-openeds="['1', '3']"
           background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>首页
            </template>
            <el-menu-item-group>
              <el-menu-item index = "1-1">
                <router-link to="/home">
                  数据统计
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>数据管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link to="/user" style = "color: white;">
                  用户列表
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link to="/shop">
                  商家列表
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link to="/food">
                  食品列表
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
         
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>添加数据
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">
                <router-link to="/shop_add"> 店铺添加 </router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link to="/food_add"> 食品添加 </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">
                <router-link to="/chart"> 图表 </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">
                <router-link to="/edit"> 富文本编辑 </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">
                <router-link to="/set"> 用户设置 </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">
                <router-link to="/explain"> 说明 </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="color: white;text-align: right; font-size: 12px;background: #3c8dbc;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <!-- 这里放的是我们的代码 -->
          <keep-alive :include="$route.meta.name">
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log( this.$route )
  }
}
</script>

<style  lang = "stylus">
.el-menu-item-group{

  background:#1f2d3d;


}
.el-menu-item-group__title{
  display: none!important;
}
.el-menu-item{
  background:#1f2d3d!important;
  padding: 0!important;
}
.el-menu-item a {
  display: block;
  width: 100%;height: 100%;
  color: white!important;
  text-align: center;
}
.el-menu-item a:hover{
  background: rgb(67, 74, 80)!important;
}

.lay-out-container{
  height: 100%;
}
.lay-out-title{
  height: 60px;
  background: #3c8dbc;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  border-right: 1px solid white;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-submenu__title{
  display: flex;
  align-items: center;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9!important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF!important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader-icon::before{
  line-height: 178px!important;
}


</style>

<script>
export default {
 
};
</script>