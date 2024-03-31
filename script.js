/*Đăng ký */
$(document).ready(function(){
    $("#js-Dangky_Dangnhap").click(function(){
        $("#js-modal").css("display","flex");
        
        $("#js-back").click(function(){
            $("#js-modal").css("display","none");
        });
        $("#js-confirm").click(function(){
            $("#js-modal").css("display","none");
        });
    });
});

/*Đề cử */
$('.owl-carousel').owlCarousel({
    loop:true, //cho phép lặp lại các slide khi chạy
    margin:10,
    nav:false, //khong để hiện điều hướng
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1500,
    dotsSpeed:500,
    autoplayHoverPause:true,//Dừng khi di chuột vào phần owl-carousel
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});