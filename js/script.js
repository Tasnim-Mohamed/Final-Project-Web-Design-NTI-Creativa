$(document).ready(function(){
  $("#owl-carousel-1").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:true,
            autoplay:true
        }
    }
});
}); 

$(document).ready(function(){
  $(".owl-carousel-2").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true,
            autoplay:true
        }
    }
});
}); 
$(document).ready(function(){
  $("#owl-carousel-3").owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true,
            autoplay:true
        }
    }
});
}); 
let headers = document.querySelectorAll(".head-menu")
let content = document.querySelectorAll(".body-menu")

headers.forEach((h, i)=>{
    h.addEventListener("click", function(){
        content.forEach((c, i)=> c.classList.add("d-none"))
        content[i].classList.toggle("d-none")
    })
})



