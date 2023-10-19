 var swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 1,
   
    centerdSlides:true,
    
    loop:true,
    
    spaceBetween: 30,
    
    
    grabCursor:true,
   
    navigation: {
        nextE1: ".swiper-button.next",
        prevE1: ".swiper-button.prev",
    },
    
    breakpoints : {
     
        991: {
            slidesPerView: 3
        }
    }
});