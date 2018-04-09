<template>
  <div id="app">
    <div class="header clear">
      <div class="logo">
          <img src="../public/img/logo.png" alt="">
      </div>
      <div id="nav">
          <div>
            <router-link to="/">首页</router-link>
            <router-link to="/about/1">全新楼盘</router-link>
            <router-link to="/about/2">二手楼盘</router-link>
            <router-link to="/about/3">全新商铺</router-link>
            <router-link to="/detail">楼市动态</router-link>
            <router-link to="/tal">联系我们</router-link>
          </div>
      </div>
      <div class="tal">
        <div>
          <img src="../public/img/tal.png" alt="">
          <span>	
              008-6666 6666</span>
        </div>
        <div>咨询电话</div>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <span>地产REALSTATE  © 2020 All Rights Reserved.</span>
      <div>
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>
<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-size: 13px;
  font-family: "Open Sans",Helvetica,Arial,Verdana,sans-serif;
  box-sizing: inherit;
}

.clear:after{
  display:block;
  clear:both;
  content:"";
  visibility:hidden;
  height:0
} 

.clear{
  zoom:1
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  position: relative;
  min-height: 182px;
}

a{
  color: #000000;
}

#nav {
  float: left;
  width: 737px;
  height: 100px;
}

#nav div{
  width: 552px;
  margin: 20px 0;
  line-height: 60px;
  position: relative;
  left: 83px;
}

#nav div a{
  display: inline-block;
  line-height: 60px;
  margin: 0 20px;
}

#nav div a:first-child{
  margin-left: 0;
}

#nav div a:last-child{
  margin-right: 0;
}

.header {
  max-width: 1190px;
  margin: 0 auto;
}

.header .logo{
  float: left;
  width: 209px;
  height: 80px;
  line-height: 80px;
  padding: 10px 0;
}

.header .logo img{
  height: 50px;
}

.tal{
  float: left;
  width: 244px;
  height: 100px;
  line-height: 100px;
}

.tal div:first-child{
  display: inline-block;
  margin-right: 10px;
  color: #8d9095;
}

.tal div:first-child img{
  position: relative;
  top: -3px;
}

.tal div:last-child{
  display: inline-block;
  width: 86px; 
  height: 31px;
  text-align: center;
  border-radius: 5px;
  line-height: 31px;
  background-color: rgb(58, 121, 232);
  color: rgb(255, 255, 255);
}

.footer{
  width: 100%;
  height: 82px;
  line-height: 82px;
  text-align: center;
  color: #8d9095;
  position: relative;
  background-color: #262626;
}

.footer div {
  position: absolute;
  width: 34px;
  height: 34px;
  top: 24px;
  right: 12px;
  background-color: red;
}

</style>
