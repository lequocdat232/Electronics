/*global jQuery, window*/
$(document).ready(function () {
    /*fGetProducts_Click();*/
    fGetProducts_Click();
});

/*gGetProducts_Click*/
function fGetProducts_Click() {

    $(".wrapbox-getProducts").click(function () {
        var _this = $(this);

        _this.parent().find("li").removeClass("active");
        _this.addClass("active");

        var wId = parseFloat(_this.attr("data-w"));
        var cId = parseFloat(_this.attr("data-cid"));
        /*console.log("gGetProducts_Click: - wId: " + wId + " - cId: " + cId);*/

        if (wId > 0 && cId > 0) {
            var _divParent = $(".wrapbox-loadProducts-" + wId + "");
            var _divProducts = $(".wrapbox-loadProduct-" + wId + "-" + cId + "");

            if (_divProducts.length) {
                _divParent.find(".wrapbox-loadProduct").css("display", "none");
                _divProducts.css("display", "block");

                //$([document.documentElement, document.body]).animate({
                //    scrollTop: divParent.offset().top - 50
                //}, 1000);
            }
            else {
                var isScrollTop = true;
                fGetProducts(wId, cId, _divParent, isScrollTop);
            }
        }

    });
}
/*fGetProducts*/
function fGetProducts(wId, cId, divParent, isScrollTop) {

    var apiVm = {
        "Id": wId,
        "Id1": cId
    };

    $.ajax({
        type: 'POST',
        url: '/api/catalogs/getWProducts',
        data: JSON.stringify(apiVm),
        contentType: "application/json"
    }).done(function (data) {

        /*console.log(data);*/

        var $html = $(data);
        $html.hide()

        divParent.append($html);

        var divProducts = $(".wrapbox-loadProduct-" + wId + "-" + cId + "");

        if ($(".p-home").hasClass("p-mobile")) {

        }
        else {

            divProducts.find("img.lazy").each(function () {
                $(this).attr("src", $(this).attr("data-original"));
            });

            /* Owl Banner * /
            /*fActive_GetBanners(divProducts);*/
            fOwlCarousel_Item2_10_Loop(divProducts.find(".owlRespon-2-10 .banner-list"));

            /*Owl Product*/
            fOwlCarousel_Product(divProducts.find(".pList-olw"));
        }

        if (isScrollTop == true) {

            divParent.find(".wrapbox-loadProduct").each(function () {
                $(this).hide();
            })

            divProducts.fadeIn(1000);

            $([document.documentElement, document.body]).animate({
                scrollTop: divParent.offset().top - 100
            }, 1000);

        }
    });
};
