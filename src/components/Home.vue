<template>
  <div id="theme-main-banner" class="banner-one">
    <div class="camera_caption">
      <div class="main-container">
        <div class="container" style="display: flex; justify-content: space-between;">
          <div class="inner_img">
            <img src="../assets/logo.png">
          </div>
          <div class="inner_text">
            <h5>#1 与LABEDGE的初次相遇</h5>
            <h1>
              和LAB一起.
              <br>实现知识管理.
            </h1>
            <a href="#" class="tran3s button-one">加入我们</a>
            <a href="#" class="tran3s button-two">了解详情</a>
          </div>
          <!-- /.container -->
        </div>
        <div class="intro_bar">
          <div class="inbar">
            <img src="../assets/free.png">
            <div>
              <h5>完全免费</h5>
              <p>我们提供服务开源免费</p>
            </div>
          </div>
          <div class="inbar">
            <img src="../assets/lock.png">
            <div>
              <h5>隐私保护</h5>
              <p>我们认为隐私高于一切</p>
            </div>
          </div>
          <div class="inbar">
            <img src="../assets/roket.png">
            <div>
              <h5>便捷分享</h5>
              <p>轻松将作品或趣闻分享</p>
            </div>
          </div>
        </div>
        <div class="pagetwo">
          <div class="intro_talk">
            <h3>轻松分享与获取知识</h3>
            <p>在LAB，您可以通过网页或者手机APP快速方便的记录，查看，分享知识点，我们将繁杂的知识点进行了仔细的分类，确保您的使用体验，我们把大量的时间花在少数伟大的事情上，希望我们触及到的每一件事物能够改变它所触及的生活，这就是我们的LAB的印记，它代表了所有</p>
          </div>
          <div class="intro_detail">
            <div class="detail_img">
              <img src="../assets/kpt.jpg" alt="">
            </div>
            <div class="detail_text">
              <div class="text_one">
                <img src="../assets/time.png" alt="">
                <div class="the_text">
                <h2 style="float:left; margin-bottom: 5px">隐私保护</h2>
                <p style="float:left; text-align: left;">在您可感知的情况下收集您的信息，并取得您的同意，以您易读的方式处理个人信息的原则给予您对您个人信息充分的控制权。</p>
              </div>
              </div>
              <div class="text_two">
                <img src="../assets/bling.png" alt="">
                <div class="the_text">
                <h2 style="float:left;margin-bottom: 5px">子弹笔记</h2>
                <p style="float:left; text-align: left;">在您可感知的情况下收集您的信息，并取得您的同意，以您易读的方式处理个人信息的原则给予您对您个人信息充分的控制权。</p>
              </div>
              </div>
            </div>
          </div>
          <div class="intro_detail">
            
            <div class="detail_text">
              <div class="text_one" style="float:left;">
                <img src="../assets/love.png" alt="">
                <div class="the_text">
                <h2 style="float:left; margin-bottom: 5px">青少年保护计划</h2>
                <p style="float:left; text-align: left;">在您可感知的情况下收集信息，并取得您的同意，以您易读的方式处理个人信息的原则给予您对您个人信息充分的控制权。</p>
              </div>
              </div>
              <div class="text_two" style="float:left;">
                <img src="../assets/phone.png" alt="">
                <div class="the_text">
                <h2 style="float:left; margin-bottom: 5px">星火计划</h2>
                <p style="float:left; text-align: left;">在您可感知的情况下收集您的信息，并取得您的同意，以您易读的方式处理个人信息的原则给予您对您个人信息充分的控制权。</p>
              </div>
              </div>
            </div>
            <div class="detail_img">
              <img src="../assets/safe.png" alt="">
            </div>
          </div>
        </div>
        <!-- /.main-container -->
      </div>
      <!-- /.camera_caption -->
    </div>
  </div>
  <!-- /#theme-main-banner -->
</template>
 <script>
export default {
  name: "Home"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  
}
.detail_img img{ width: 750px; height: 300px;}
.intro_detail{
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-around;
}
.intro_detail .text_one,.intro_detail .text_two{
  margin-top: 10vh;
  display: flex;
  width: 70%;
  float:right;
}
.intro_detail .text_one p,.intro_detail .text_two p{
    font-size: 14px;
    color: #8b8b8b;
}
.intro_detail .text_one img,.intro_detail .text_two img{
  margin-top:10px;
  margin-right: 20px; 
  width:60px;
  height: 60px;
}
.inbar {
  width: 33.3%;
  height: 100px;
  margin-top: 45px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.inbar img {
  width: 55px;
  height: 55px;
  margin-left: 100px;
}
.inbar h5 {
  font-size: 25px;
  color: #e3e3e3;
}
.inbar p {
  font-size: 18px;
  color: #e3e3e3;
}
.intro_bar {
  margin-top: 13vh;
  background-color: #545c64;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
}
.intro_talk {
  position: relative;
  width: 800px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
.intro_talk h3 {
  font-size: 28px;
  color: #252525;
  margin-top: 10vh;
}
.intro_talk p {
  font-size: 14px;
  color: #8f8f8f;
  margin-top: 4vh;
}
.container {
  position: relative;
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;
}
.inner_img {
  position: relative;
  display: inline-block;
  margin: 0 auto;
}
inner_text {
  position: relative;
  display: inline-block;
  margin: 0 auto;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
  font-weight: normal;
} /*背景图片100%适应整个屏幕*/

.container a {
  text-decoration: none;
  display: inline-block;
}

a:hover,
a:focus,
a:visited {
  text-decoration: none;
  outline: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: block;
  padding: 0;
}

.nav-tabs > li.active > a {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.float-left {
  float: left;
}
.float-right {
  float: right;
}

.camera_wrap {
  float: none;
}

#theme-main-banner .camera_caption {
  height: 100%;
}
#theme-main-banner .camera_caption .main-container {
  position: relative;
}

#theme-main-banner .camera_caption > div {
  background: transparent;
  position: absolute;
  width: 100%;
  z-index: 1;
  -webkit-transform: translateY(-50%);
  transform: translateY(0%);
  text-shadow: none;
  left: 0;
  padding: 0;
  z-index: 9;
}
#theme-main-banner .camera_caption .container {
  position: relative;
  z-index: 99;
}
#theme-main-banner .camera_caption .container h5 {
  font-size: 25px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
  color: #fff;
  text-transform: uppercase;
}
#theme-main-banner.banner-one .camera_caption .container h5 {
  color: rgba(0, 0, 0, 0.4);
  text-transform: capitalize;
}
#theme-main-banner .camera_caption .container h1 {
  font-family: "Poppins";
  font-size: 50px;
  color: #fff;
  text-transform: capitalize;
  margin: 25px 0 40px 0;
}
#theme-main-banner.banner-one .camera_caption .container h1 {
  color: #000;
}
#theme-main-banner .camera_caption .container p {
  font-size: 20px;
  margin: 0 0 55px 0;
  color: rgba(255, 255, 255, 0.85);
}
#theme-main-banner.banner-one .camera_caption .container p {
  color: rgba(0, 0, 0, 0.6);
}
#theme-main-banner .camera_caption .container a {
  width: 190px;
  line-height: 56px;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #fff;
  border-radius: 3px;
  text-align: center;
  margin: 10px 15px 0 0;
  color: #fff;
}
#theme-main-banner .camera_caption .container a:hover {
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
}
#theme-main-banner .camera_caption .container a i {
  font-size: 22px;
  vertical-align: -1px;
  margin-right: 10px;
}
#theme-main-banner .camera_caption .container a img {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}
#theme-main-banner .camera_caption .container a.button-one {
  background: #252525;
  border-color: #252525;
  text-decoration: none;
}
#theme-main-banner.banner-one .camera_caption .container a.button-two {
  border-color: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.52);
  text-decoration: none;
}
#theme-main-banner .camera_caption .container a.button-one:hover,
#theme-main-banner .camera_caption .container a.button-two:hover,
#theme-main-banner.gradient-banner-one
  .camera_caption
  .container
  a.button-one:hover,
#theme-main-banner.gradient-banner-one
  .camera_caption
  .container
  a.button-two:hover,
.home-page-one
  .partical-gradient-one
  #theme-main-banner
  .camera_caption
  .container
  a.button-one:hover,
.home-page-one
  .partical-gradient-one
  #theme-main-banner
  .camera_caption
  .container
  a.button-two:hover {
  background: #fff;
  border-color: #fff;
  color: #252525;
}

.tran3s,
.theme-button span,
.owl-theme .owl-dots .owl-dot span,
.pricing-plan-section .nav-tabs > li.active > a {
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
</style>
