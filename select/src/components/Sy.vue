<template>
	<div class="a">
    <div class="a_tit clear">
      <h2>
          {{b}}                   
      </h2>
      <h3>
          {{c}}                 
      </h3>
    </div>
    <ul class="a_con clear">
      <li v-for="i in arr">
        <img :src="i.img" alt="">
        <div>
            <span class="name">
                {{i.name}}
            </span><br>
            <span>地区：{{i.area}}</span><br>
            <span>户型：{{i.house}}</span><br>
            <span>价格：{{i.price}}</span>
        </div>
      </li>
    </ul>
    <div class="duo">
      <div>浏览更多{{b}}</div>
    </div>
  </div>
</template>
<script>
	export default {
		data(){
      return{
          b:"",
          c:"",
          arr:[],
      }
    },
    props:{
        a:String
    },
    created(){
        this.$http.post('http://localhost:8000',{fenlei:this.a,one:0,two:3},{emulateJSON:true}).then(e=>this.arr=e.body)
        if(this.a==1){
            this.b="全新楼盘"
            this.c="- New Apartment -"
        }else if(this.a==2){
            this.b="二手楼盘"
            this.c="- New Shops -"
        }else if(this.a==3){
            this.b="全新商铺"
            this.c="- Second Hand -"
        }
    }
  }
</script>
<style>
	.a{
    width: 818px;
    height: 500px;
    margin-top: 40px;
    border: 1px solid #e2e2e2;
    background-color: #F7F7F7;
  }

  .a:last-child{
    margin-bottom: 50px;
  }
  
  .a_tit{
    height: 72px;
    text-align: center;
  }

  .a_tit h2{
    margin: 25px 0 5px 5px;
    line-height: 29px;
    font-size: 22px;
    font-family: '微软雅黑';
    font-weight: bold;
  }
  .a_tit h3{
    margin: 0 0 22px 0;
    line-height: 14px;
    font-size: 16px;
    font-family: 'arial';
    color: #aaaaaa;
  }

  .a_con li{
    float: left;
    width: 270px;
    height: 310px;
    margin-right: 2px;
    margin-bottom: 20px;
    background-color: #fff;
  }

  .a_con li img{
    width: 270px;
  }

  .a_con li div{
    padding-left: 15px;
  }

  .a_con li div .name{
    display: inline-block;
    font-family: '微软雅黑';
    margin: 15px 0;
    font-weight: bold;
    padding: 5px 0 8px 0;
    margin-bottom: 5px;
  }

  .a_con li div span{
    margin-top: -15px;
    line-height: 22px;
  }

  .a .duo{
    height: 64px;
    width: 100%;
    position: relative;
  } 

  .a .duo div{
    width: 134px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #3a79e8;
    position: absolute;
    left: 50%;
    margin-left: -67px;
    transition: all .2s ease-in-out;
  } 

  .a .duo div:hover{
    border-color: #000000;
  } 
</style>