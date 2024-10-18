/*global jQuery, window*/
$(document).ready(function () {
    /*Func popup trang chu */
    if ($("#popup-allpage .banner-list").length) {

        var popupCookie = "_popupAllPageDisable";

        /*MMC_setCookie(popupCookie, 1, 0.01);*/
        var getCookie = MMC_getCookie(popupCookie);
        //console.log("WV: " + ($(window).width()) + ". PP getCookie " + getCookie);

        if (getCookie == 1 || getCookie == undefined) {
            $("#popup-allpage").addClass("popup-allpage-active");

            fPopupAllPage();

            $("#popup-allpage").css("display", "block");

            MMC_setCookie(popupCookie, 1, 0.01);
            //var getCookieNew = MMC_getCookie(popupCookie);
            //console.log("WV: " + ($(window).width()) + ". PP getCookieNew " + getCookieNew);
        }
        else {
            $("#popup-allpage").removeClass("popup-allpage-active");
            //MMC_setCookie(popupCookie, 0, 0.01);
        }
    }

    /*Func popup chan trang */
    if ($("#popup-footer .banner-list").length) {

        $("#popup-footer").css("display", "block");

        var popupCookieFooter = "_popupFooterDisable";

        /*MMC_setCookie(popupCookie, 1, 0.01);*/
        var getCookie = MMC_getCookie(popupCookieFooter);
        //console.log("WV: " + ($(window).width()) + ". PP getCookie " + getCookie);

        if (getCookie == 1 || getCookie == undefined) {
            $("#popup-footer").removeClass("popup-footer-hide");

            MMC_setCookie(popupCookieFooter, 1, 0.01);
            //var getCookieNew = MMC_getCookie(popupCookie);
            //console.log("WV: " + ($(window).width()) + ". PP getCookieNew " + getCookieNew);
        }
        else {
            $("#popup-footer").addClass("popup-footer-hide");
            //MMC_setCookie(popupCookie, 0, 0.01);
        }

        var _popupFooter = $(".popup-footer");
        var _popupFooterClose = $(".popup-footer .popup-footer-close");
        var _popupFooterShow = $(".popup-footer .popup-footer-show");

        $(_popupFooterClose).click(function () {
            $("#popup-footer").addClass("popup-footer-hide");
            MMC_setCookie(popupCookieFooter, 0, 0.01);
        });

        $(_popupFooterShow).click(function () {
            $("#popup-footer").removeClass("popup-footer-hide");
            MMC_setCookie(popupCookieFooter, 1, 0.01);
        });
    }

    /*
       setTimeout(function () {
           $(".wrapbox-getBanners").each(function () {
               var _this = $(this);
               fValid_GetBanners(_this);
           });
       }, 500);
    */
});

function fPopupAllPage() {

    var popupCookie = "_popupAllPageDisable";

    var _popupAllpage = $(".popup-allpage");
    var _popupAllpageItem = $(".popup-allpage .popup-allpage-item");
    var _popupAllpageImage = $(".popup-allpage .popup-allpage-item img");
    var _popupAllpageClose = $(".popup-allpage .popup-allpage-close");

    var _widthSite = $(window).width();
    var _heightSite = $(window).height();
    //console.log("_widthSite: " + _widthSite + "-" + _heightSite)

    var _widthBoxImage = $(_popupAllpageImage).width();
    var _heightBoxImage = $(_popupAllpageImage).height();
    //console.log("_widthBoxImage: " + _widthBoxImage + "-" + _heightBoxImage)

    if (_widthBoxImage < 100) _widthBoxImage = 600;
    if (_heightBoxImage < 100) _heightBoxImage = 400;

    if (_widthSite <= 640) {
        _widthBoxImage = 300;
        _heightBoxImage = 400;
    }

    $(_popupAllpageItem).css({
        "width": "" + _widthBoxImage + "px"
        , "height": "" + _heightBoxImage + "px"
        , "left": "" + (_widthSite - _widthBoxImage) / 2 + "px"
        , "top": "" + (_heightSite - _heightBoxImage) / 2 + "px"
    });

    setTimeout(function () {
        $(_popupAllpage).removeClass("popup-allpage-active");
    }, 10000);

    $(_popupAllpage).click(function () {
        $(_popupAllpage).removeClass("popup-allpage-active");
    });

    $(_popupAllpageClose).click(function () {
        $(_popupAllpage).removeClass("popup-allpage-active");
        MMC_setCookie(popupCookie, 0, 0.01);
    });

    $("html").keyup(function (e) {
        if (_popupAllpage != null)
            if (e.which == 27) {
                $(_popupAllpage).removeClass("popup-allpage-active");

                _popupAllpage = null;

                MMC_setCookie(popupCookie, 0, 0.01);
            }
    });
};

/*Lấy nhận cookie*/
function MMC_getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return undefined;
}
/*Ghi nhận, cài đặt thời gian lưu cookie*/
function MMC_setCookie(key, value, e) {
    var d = new Date();
    d.setTime(d.getTime() + (e * 24 * 60 * 60 * 1000));
    var ee = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + "; " + ee + "; path=/";
}

/*fActive_GetBanners*/
function fActive_GetBanners(objParent) {
    var _this = objParent.find(".wrapbox-getBanners");
    fValid_GetBanners(_this);
};

/*fValid_GetBanners*/
function fValid_GetBanners(objThis) {
    var _id = parseFloat(objThis.attr('data-id'));
    /*console.log("banners: " + _id);*/
    if (_id > 0) {
        fGetBanners(objThis);
    }
};

/*fGetBanners*/
function fGetBanners(objThis) {
    var apiVm = {
        "Id": parseFloat(objThis.attr('data-id')),
        "Id1": parseFloat(objThis.attr('data-cid')),
        "Limit": parseFloat(objThis.attr('data-limit'))
    };
    /*console.log("banners: " + JSON.stringify(apiVm));*/
   
};

