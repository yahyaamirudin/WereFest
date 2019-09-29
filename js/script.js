$(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if(scroll>160){
        $("nav.navbar").addClass("backNav");
        $("nav.navbar").removeClass("navbar-dark");
        $("nav.navbar").addClass("navbar-light");
    }else{
        $("nav.navbar").removeClass("backNav");
        $("nav.navbar").removeClass("navbar-light");
        $("nav.navbar").addClass("navbar-dark");
    }
})
