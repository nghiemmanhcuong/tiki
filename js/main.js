const imgSlider = document.querySelectorAll(".slider__img a");
const rightbtn = document.getElementById('btn-right')
const leftbtn = document.getElementById('btn-left')
let index = 0;
// ======================== slider__container1 ===========================
rightbtn.addEventListener("click",function(){ 
    index = index + 1;
    if(index > imgSlider.length-2){
        index = 0;
    }
   
    document.querySelector('.slider').style.right = index*100+"%";
})

leftbtn.addEventListener("click",function(){ 
    index = index - 1;
    if(index <=0){
        index = imgSlider.length-2;
    }
    document.querySelector('.slider').style.right = index*100+"%";
});

setInterval(function(){
    index = index + 1;
    if(index > imgSlider.length-2){
        index = 0;
     } 
    document.querySelector('.slider').style.right = index*100+"%";
},9500);

// ======================== show login ===========================

const openlogin = document.getElementById("open-login");
const openlogin2 = document.getElementById("open-login2");
const closelogin = document.getElementById("close-login");
function showlogin(){
    document.getElementById("login").classList.add("show__login");
}
openlogin.addEventListener("click",showlogin);
openlogin2.addEventListener("click",showlogin);

closelogin.addEventListener("click",()=>{
    document.getElementById("login").classList.remove("show__login");
})

// ======================== slider__container2 ===========================
var swiper = new Swiper(".slider__container2", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// ======================== brand_static_widget sliders__1 ===========================
var swiper = new Swiper(".sliders__1", {
    loop:true,
    centerredSlide: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction:false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// ======================== brand_static_widget sliders__2 ===========================
var swiper = new Swiper(".sliders__2", {
  loop:true,
  centerredSlide: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======================== top_trending-slider ===========================
var swiper = new Swiper(".top_trending-slider", {
  loop:true,
  centerredSlide: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======================== infinite__scroll-main ===========================
let infiniteBtn = document.querySelector(".infinite__scroll-btn");
let infiniteBtn2 = document.querySelector(".infinite__scroll-btn2");

infiniteBtn.addEventListener("click",function(){
  infiniteBtn.style.display = "none";
  document.getElementById("main-container2").classList.remove("main__container2");
  infiniteBtn2.style.display = "flex";
})
