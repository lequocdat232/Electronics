$(document).ready(function () {

    fWindowResize();

    setTimeout(function () {
        $(window).resize(function () {
            fWindowResize();
        });
    }, 1000);

});
function fWindowResize() {

    var objNavBarMain = $("#navbarMain");

    if ($(window).width() > 992) {
        $("html").removeClass("de-t");
        $("html").removeClass("de-m");

        $("html").addClass("de-d");

        if (objNavBarMain.hasClass("navbar-lg") == false) {
            objNavBarMain.addClass("navbar-lg");
        }
    }
    else if ($(window).width() > 768) {
        $("html").removeClass("de-d");
        $("html").removeClass("de-m");

        $("html").addClass("de-t");

        if (objNavBarMain.hasClass("navbar-lg") == false) {
            objNavBarMain.addClass("navbar-lg");
        }

        fOwlCarousel_Product($(".de-t .widget-product-list").find(".product-list-olw-mobile"));
    }
    else {
        $("html").removeClass("de-d");
        $("html").removeClass("de-t");

        $("html").addClass("de-m");

        objNavBarMain.removeClass("navbar-lg");

        if ($(".p-home").hasClass("p-mobile")) {
        }
        else {
            fOwlCarousel_Product($(".de-m").find(".pList-olwMobile"));
        }

        /*fOwlCarousel_Item3($(".de-m").find(".wrapbox-getBanners.notOwl"));*/



    }
};