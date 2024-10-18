//$(document).ready(function () {

//    fGallery_UpdateView();
//    fMenu_UpdateView();

//    setTimeout(function () {

//        fGallery_Report();

//        /*fMenu_Report();*/

//        fProduct_Report();

//        fNews_Report();

//    }, 3000);
//});

//function fGallery_UpdateView() {
//    /*Track*/
//    $(".banner-item a").click(function () {

//        var id = $(this).attr("data-id");

//        $.ajax({
//            type: "POST",
//            url: "/api/view-banner/" + id + ""
//        }).done(function (msg) {
//        }).fail(function (error) {
//        });
//    });
//    /*Track*/
//};

//function fGallery_Report() {
//    if ($(window).width() > 1100) {

//        setTimeout(function () {

//            var bannerItemViewIds = "0-";

//            $(".banner-item a").each(function () {
//                if ($(this).attr("data-id") > 0)
//                    bannerItemViewIds += $(this).attr("data-id") + "-";
//            });

//            var postData = {
//                ids: bannerItemViewIds
//            }

//            setTimeout(function () {

//                $.ajax({
//                    type: "POST",
//                    url: "/api/view-banner-get",
//                    data: JSON.stringify(postData),
//                    contentType: "application/json"
//                }).done(function (msg) {
//                    /*console.log("view-banner: " + JSON.stringify(msg))*/
//                    $.each(msg, function () {
//                        $(".banner-item-view-" + this.id).html("Views:<b>" + this.viewsDateNow + "</b>" + "(" + this.viewsTotal + "/" + this.countDays + ")");
//                        $(".banner-item-view-" + this.id).css("display", "block");
//                    });

//                }).fail(function (error) {
//                    /*console.log("view-banner error: " + JSON.stringify(error))*/
//                });
//            }, 2000);
//        }, 1000);
//    }
//};

//function fMenu_UpdateView() {
//    /*Track*/
//    $(".v-menu-item a").click(function () {

//        var id = $(this).attr("data-id");

//        $.ajax({
//            type: "POST",
//            url: "/api/view-menu/" + id + ""
//        }).done(function (msg) {
//        }).fail(function (error) {
//        });
//    });
//    /*Track*/
//};

//function fMenu_Report() {
//    if ($(window).width() > 1100) {

//        setTimeout(function () {

//            var menuItemViewIds = "0-";

//            $(".v-menu-item a").each(function () {
//                if ($(this).attr("data-id") > 0)
//                    menuItemViewIds += $(this).attr("data-id") + "-";
//            });

//            var postData = {
//                ids: menuItemViewIds
//            }

//            setTimeout(function () {

//                $.ajax({
//                    type: "POST",
//                    url: "/api/view-menu-get",
//                    data: JSON.stringify(postData),
//                    contentType: "application/json"
//                }).done(function (msg) {
//                    /*console.log("view-banner: " + JSON.stringify(msg))*/
//                    $.each(msg, function () {
//                        $(".menu-item-view-" + this.id).html("Views:<b>" + this.viewsDateNow + "</b>" + "(" + this.viewsTotal + "/" + this.countDays + ")");
//                        $(".menu-item-view-" + this.id).css("display", "block");
//                    });

//                }).fail(function (error) {
//                    /*console.log("view-banner error: " + JSON.stringify(error))*/
//                });
//            }, 2000);
//        }, 1000);
//    }
//};


//function fProduct_Report() {
//    if ($(window).width() >=1100) {

//        setTimeout(function () {

//            var productViewIds = "0-";

//            $("a.product-item").each(function () {
//                if ($(this).attr("data-id") > 0)
//                    productViewIds += $(this).attr("data-id") + "-";
//            });

//            var postData = {
//                ids: productViewIds
//            }

//            /*console.log("view-product ids: " + JSON.stringify(JSON.stringify(postData)));*/

//            setTimeout(function () {

//                $.ajax({
//                    type: "POST",
//                    url: "/api/view-product-get",
//                    data: JSON.stringify(postData),
//                    contentType: "application/json"
//                }).done(function (msg) {
//                    /*console.log("view-product: " + JSON.stringify(msg))*/
//                    $.each(msg, function () {
//                        $(".product-item-view-" + this.id).html("Views:<b>" + this.viewsDateNow + "</b>" + "(" + this.viewsTotal + "/" + this.countDays + ")");
//                        $(".product-item-view-" + this.id).css("display", "block");
//                    });

//                }).fail(function (error) {
//                    /*console.log("view-product error: " + JSON.stringify(error))*/
//                });
//            }, 3000);

//        }, 1000);
//    }
//};

//function fNews_Report() {
//    if ($(window).width() > 1100) {

//        setTimeout(function () {
//            var newsViewIds = "0-";

//            $(".news-item a").each(function () {
//                if ($(this).attr("data-id") > 0)
//                    newsViewIds += $(this).attr("data-id") + "-";
//            });

//            $(".news-thumbnail a").each(function () {
//                if ($(this).attr("data-id") > 0)
//                    newsViewIds += $(this).attr("data-id") + "-";
//            });

//            $(".news-thumbnail-grid a").each(function () {
//                if ($(this).attr("data-id") > 0)
//                    newsViewIds += $(this).attr("data-id") + "-";
//            });

//            var postData = {
//                ids: newsViewIds
//            }

//            setTimeout(function () {

//                $.ajax({
//                    type: "POST",
//                    url: "/api/view-news-get",
//                    data: JSON.stringify(postData),
//                    contentType: "application/json"
//                }).done(function (msg) {
//                    /*console.log("view-banner: " + JSON.stringify(msg))*/
//                    $.each(msg, function () {
//                        $(".news-item-view-" + this.id).html("Views:<b>" + this.viewsDateNow + "</b>" + "(" + this.viewsTotal + "/" + this.countDays + ")");
//                        $(".news-item-view-" + this.id).css("display", "block");
//                    });

//                }).fail(function (error) {
//                    /*console.log("view-banner error: " + JSON.stringify(error))*/
//                });
//            }, 5000);

//        }, 1000);
//    }
//};