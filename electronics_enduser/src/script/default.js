$(document).ready(function () {

    var isOpen = true;
    $("#navbarMain .nav-item.dropdown").mouseover(function () {

        isOpen = true;
        if (!($(this).hasClass("show"))) {
            $("#navbarMain .nav-item.dropdown").removeClass("show");
            $("#navbarMain .nav-item.dropdown > ul.dropdown-menu").removeClass("show");

            $(this).addClass("show");
            $(this).find("ul.dropdown-menu").addClass("show");
        }
    }).mouseleave(function () {
        isOpen = false;
        setTimeout(function () {
            if (isOpen == false) {
                $("#navbarMain .nav-item.dropdown").removeClass("show");
                $("#navbarMain .nav-item.dropdown > ul.dropdown-menu").removeClass("show");
            }
        }, 300);
    });

    $("#navbarMain .nav-link.dropdown-toggle").click(function () {
        /*e.preventDefault();
        e.stopPropagation();*/
        if ($(this).parent().hasClass("show")) {
            var thisHref = $(this).attr("href");
            if (thisHref != "" && thisHref != "javascript:void(0)" && thisHref != "javascript:;" && thisHref != "#")
                window.location.href = thisHref;
        }
    });

    $("#navbarMain .nav-link.dropdown-toggle .nav-link-text a").click(function () {
        var thisHref = $(this).attr("href");
        window.location.href = thisHref;
    });

    $("#navbarMain a.nav-link-1.dropdown-toggle").click(function () {
        var thisHref = $(this).attr("href");
        if (thisHref != "" && thisHref != "javascript:void(0)" && thisHref != "javascript:;" && thisHref != "#")
            window.location.href = thisHref;
    });


    if ($(".com-product-list-seemore").length) {
        $(".com-product-list-seemore a").click(function () {
            var parent = $(this).parent().parent();

            $(this).parent().remove();

            $(parent).find(".com-product-item").css("display", "block");
        });
    }
});


// /*FlashSale 0824*/
// function fFlashSale0824_Action(objClassBox, objClassView) {
//     $(objClassBox).removeClass('product-flashsale-active').addClass('product-flashsale-none');
//     $(objClassView).removeClass('product-flashsale-none').addClass('product-flashsale-active');
// }
// /*FlashSale 0824*/

// function fMM_CopyText(textCopy) {
//     // Tạo một trường văn bản tạm thời để sao chép văn bản
//     var tempInput = document.createElement("textarea");
//     tempInput.value = textCopy;
//     document.body.appendChild(tempInput);

//     // Chọn và sao chép văn bản
//     tempInput.select();
//     tempInput.setSelectionRange(0, 99999); // Cho di động

//     // Sao chép văn bản vào clipboard
//     document.execCommand("copy");

//     // Xóa trường văn bản tạm thời
//     document.body.removeChild(tempInput);
// }
