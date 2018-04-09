<template>
  <div class="home">
    <div class="lunbo">
        
      <swiper :options="swiperOption"  ref="mySwiper">  
          <!-- 这部分放你要渲染的那些内容 -->  
          <swiper-slide v-for="item in items"> 
              <img :src="item" class="index_img">
          </swiper-slide>  
          <!-- 这是轮播的小圆点 -->  
          <div class="swiper-pagination" slot="pagination"></div>  
      </swiper>  
      <button class="toL" @click="toL()"><</button>
      <button class="toR" @click="toR()">></button>
    </div>
    <div class="con clear">
      <div class="con_l">
        <ul class="clear">
          <li>
            <img src="../../public/img/con_1.jpg" alt="">
          </li>
          <li>
            <img src="../../public/img/con_2.jpg" alt="">
          </li>
          <li>
            <img src="../../public/img/con_3.jpg" alt="">
          </li>
          <li>
            <img src="../../public/img/con_4.jpg" alt="">
          </li>
        </ul>
        <div class="main">
          <Sy a="1"></Sy>
          <Sy a="2"></Sy>
          <Sy a="3"></Sy>
        </div>
      </div>
      <div class="con_r">
        <div class="new">
          <div class="new_tit clear">
            <div>楼市动向 <span>- NEWS</span></div>
            <div>阅读更多</div>
          </div>
          <div class="new_con">
            <ul>
              <li>
                <h5>攔金31億元！中山第四季度土地成...</h5>
                <p>In this chapter in our series ...</p>
              </li>
              <li>
                <h5>攔金31億元！中山第四季度土地成...</h5>
                <p>In this chapter in our series ...</p>
              </li>
              <li>
                <h5>攔金31億元！中山第四季度土地成...</h5>
                <p>In this chapter in our series ...</p>
              </li>
              <li>
                <h5>攔金31億元！中山第四季度土地成...</h5>
                <p>In this chapter in our series ...</p>
              </li>
              <li>
                <h5>攔金31億元！中山第四季度土地成...</h5>
                <p>In this chapter in our series ...</p>
              </li>
              <li>
                <h5>攔金31億元！中山第四季度土地成...</h5>
                <p>In this chapter in our series ...</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="new">
          <div class="new_tit clear">
            <div>联系我们 <span>- CONTACT</span></div>
          </div>
          <div class="new_con">
            <ul>
              <li>
                <h5 style="font-weight: bold">Tom <img src="../../public/img/ren.png" alt=""></h5>
                <p style="color: #0000CD">188 0000 0000  /  008-6666 6666</p>
              </li>
              <li>
                <h5 style="font-weight: bold">Smith <img src="../../public/img/ren.png" alt=""></h5>
                <p style="color: #0000CD">188 0000 0000  /  008-6666 6666</p>
              </li>
              <li>
                <h5 style="font-weight: bold">And <img src="../../public/img/ren.png" alt=""></h5>
                <p style="color: #0000CD">188 0000 0000  /  008-6666 6666</p>
              </li>
            </ul>
          </div>
        </div>
        <div id="neirong-right">
            <div id="neirong-right-top">
              <span></span>
              在线表单 - FORM
            </div>
            <div id="neirong-right-lei">
              <div>
               <input type="text" placeholder="称呼">
              </div>
              <div >
                <input type="text" placeholder="邮箱">
              </div>
              <div >
                <input type="text" placeholder="电话">
              </div>
              <div >
                <textarea placeholder="内容"></textarea>
              </div>
              <div >
                <input type="chebox" placeholder="验证码">
              </div>
              <div >
                <button>提交</button>
              </div>
            </div>
          </div>
    
    
          <div id="neirong-right">
            <div id="neirong-right-top">
              <span></span>
              地址 - ADDRESS
            </div>
            <div id="neirong-right-lei">
              <div >
                <h4>郵箱：info@realestate.com</h4>
                <h6>地址：上海市静安区南京西路时代大厦</h6>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sy from '@/components/Sy.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name: 'home',
    components: {
      Sy,
      swiper,  
      swiperSlide 
    },
    data() {  
            return {
                items:['http://localhost:8080/img/lunbo.jpg','http://localhost:8080/img/lunbo2.jpg','http://localhost:8080/img/lunbo3.jpg'],
                swiperOption: {
                    loop:'true',
                    pagination: '.swiper-pagination',  
                    slidesPerView: 'auto',  
                    centeredSlides: true,  
                    paginationClickable: true,
                    onSlideChangeEnd: swiper => {  
                        //这个位置放swiper的回调方法  
                        this.page = swiper.realIndex+1;  
                        this.index = swiper.realIndex;  
                    },  
                }, 
                swiperSlides: [1, 2, 3]  
            }  
        },  
        //定义这个sweiper对象  
        computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            // this.swiper.slideTo(0, 0, false); 
          setInterval(() => {
            this.swiper.slideNext(2000, false);
          }, 3000)
        },
        methods:{
            toL(){
              this.swiper.slidePrev(2000, false);
            },
            toR(){
              this.swiper.slideNext(2000, false);
            }
        }


  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
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

  .lunbo{
    width: 1259px;
    height: 600px;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: 118px;
    position: relative;
  }

  .lunbo:hover button{
    display: block;
  }

  .lunbo button{
    display: none;
    position: absolute;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.3);
    border: none;
    z-index: 999;
    font-size: 24px;
    color: #ffffff;
    outline: none;
  }

  .toL{
    left: 10px;
    top: 50%;
    margin-top: -15px;
  }

  .toR{
    right: 10px;
    top: 50%;
    margin-top: -15px;
  }

  .lunbo .swiper-slide{
    width: 1259px;
    height: 600px;
    overflow: hidden;
  }

  .lunbo img{
    height: 600px;
    margin-left: -271.5px;
  }

  .con{
    width: 1120px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .con > div.con_l{
    width: 820px;
    float: left;
  }

  .con > div.con_l > ul{
    margin-bottom: 40px;
  }

  .con > div.con_l > ul li{
    float: left;
    margin: 5px;
  }

  .con > div.con_l > ul li:nth-of-type(1){
    margin-left: 0;
    margin-top: 0;
  }

  .con > div.con_l > ul li:nth-of-type(2){
    margin-right: 0;
    margin-top: 0;
  }
  
  .con > div.con_l > ul li:nth-of-type(3){
    margin-left: 0;
    margin-bottom: 0;
  }

  .con > div.con_l > ul li:nth-of-type(4){
    margin-right: 0;
    margin-bottom: 0;
  }

  .con > div.con_l > ul li > img{
    width: 405px;
  }

  .main{
    margin-right: 15px;
  }

  

  .con div.con_r{
    float: left;
    width: 270px;
    margin-left: 20px;
  }

  .con div.con_r > div{
    background-color: #f7f7f7;
    min-height: 200px;
  }

  .new {
    padding: 0 15px 1px 15px;
    margin-bottom: 10px;
  }
  
  .new .new_tit{
    padding: 20px 0 15px 0;
    height: 33px;
    line-height: 33px;
  }

  .new .new_tit div:nth-of-type(1){
    float: left;
    width: 133px;
    height: 18px;
    line-height: 18px;
    font-size: 14px;
    padding-left: 10px;
    border-left: 18px solid #000000;
    margin-top: 8px;
    font-weight: bold;
  }

  .new .new_tit div:nth-of-type(1) > span {
    font-size: 12px;
  }

  .new .new_tit div:nth-of-type(2){
    float: right;
    width: 64px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #000000;
    text-align: center;
    font-family: '微软雅黑';
    font-size: 12px;
    color: #000000;
    margin-top: 5px;
  }

  .new_con ul li{
    margin-bottom: 25px;
  }

  .new_con ul li h5{
    color: #333333;
    font-size: 14px;
    font-family: '微软雅黑';
    line-height: 14px;
    transition: all .2s ease-in-out;
  }

  .new_con ul li h5:hover{
    color: #999999;
  }

  .new_con ul li p{
    color: #999999;
    font-size: 13px;
    font-family: '微软雅黑';
    line-height: 22px;
  }
  .cont {
    width: 100%;
  }
  #img {
    width: 90%;
    /* height: 500px; */
    max-width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    margin-bottom: 5%;
  }
  #img img {
    width: 100%;
    font-size: 0;
    vertical-align: middle;
  }
  #tu {
    vertical-align: middle;
    margin-left: 12%;
    margin-right: 2%;
    height: 100%;
    box-sizing: border-box;
    margin-bottom: 4%;
    float: left;
  
  }
  #tu img {
    width: 50%;
  }
  .left{
    float: left;
    width: 70%;
    overflow: hidden;
  }
  .right {
    width: 21%;
    box-sizing: border-box;
    float: left;
  }
  .lan{
  color: #0000CD;
}
#neirong-right {
  margin-top: 15px;
  width: 100%;
  background-color: #f7f7f7;
  float: left;
  padding-bottom: 20px;
}
#neirong-right-top {
  overflow: hidden;
  margin-top: 20px;
}
#neirong-right-top span {
  width: 10px;
  height: 10px;
  background-color: black;
  display: inline-block;
  margin-top: 5px;
  margin-right: 8%;
  margin-left: 10%;
}
#neirong-right-top button {
  margin-left: 8%;
}
#neirong-right-lei {
  text-align: center;
}
#neirong-right-lei div {
  margin-left: 8%;
  text-align: left;
  margin-top: 5%;
  position: relative;
}

#neirong-right-lei div input {
  line-height: 35px;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;
}
#neirong-right-lei div textarea {
  border: none;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;
}

#neirong-right-lei div button {
  background-color: #393939;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
}
#neirong-right-lei div img {
  position: absolute;
  left: 17%;
  top: 1%;
}
#bottom {
  text-align: center;
  line-height: 60px;
  margin-top: 50px;
  width: 100%;
  height: 60px;
  color: #ccc;
  background-color: #393939;
}
h4{
  line-height: 30px;
}

h6{
  line-height: 30px;
}
</style>
