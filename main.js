var dw = 375, dh = 603;

$(function(){
    dw = $("body").width();
    dh = $("body").height();
    ndh = dw * 1.61;
    /*if(ndh > dh) {
        $("body").height(dh);
        $("section").height(dh);
        $(".turning").width(dw);
        $(".turning").height(dh);
    }*/
});


$(window).on("orientationchange",function(event){
    var ori = window.orientation;
    if(ori == 90 || ori == -90){
        $(".turning").show();
    } else {
        $(".turning").hide();
    }
});


new Swiper('.special > .swiper-container', {
    autoplay: 5000,
    loop : true,
})


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?30b21f167a387c72e0e47182779529e2";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();