////$(document).ready(function () {

////    setTimeout(function () {
////        $.getScript('/lib-modules/affiliate/masoffer-base.js', function () {
////            //alert('hi masoffer')
////        });

////        $.getScript('/lib-modules/affiliate/accesstrade-base.js', function () {
////            //alert('hi accesstrade')
////        });
////    }, 1000);

////});

$(document).ready(function () {

    if ($('.product-countdown-flashsale0824 .productcountdown-view ').length > 0) {
        $(".productcountdown-view").each(function (index) {
            fProductCountDown_Simple($(this));
        });
    }
    else if ($('.product-countdown-productdetail .productcountdown-view ').length > 0) {
        $(".productcountdown-view").each(function (index) {
            fProductCountDown_Simple($(this));
        });
    }
    else {
        $(".productcountdown-view").each(function (index) {
            fProductCountDown($(this));
        });
    }

});
function fProductCountDown(objThis) {

    var _this = $(objThis);
    //alert(_this.attr("data-date"));

    /*console.log("product-countdown: " + _this.attr("data-date"));*/

    // Set the date we're counting down to
    var countDownDate = new Date(_this.attr("data-date")).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days > 0)
            hours = (days * 24) + hours;

        if (hours < 10)
            hours = "0" + hours;

        if (minutes < 10)
            minutes = "0" + minutes;

        if (seconds < 10)
            seconds = "0" + seconds;

        //  days + "d " + hours + "h " + minutes + "m " + seconds + "s "

        // Output the result in an element with id="demo"
        _this.html("<div class= 'time'><span class='hours'> " + hours + "<div style='margin-top: 5px; width: 100%; height: 1px; background: #FF3647'></div><span>Giờ</span></span><p style='font-size: 28px; line-height: 18px; font-weight: bold; color: #101010; margin: 0 7px'>:</p><span class='minutes'> " + minutes + "<div style='margin-top: 5px; width:100%; height: 1px; background: #FF3647'></div><span>Phút</span></span><p style='font-size: 28px; line-height: 18px; font-weight: bold; color: #101010; margin: 0 7px'>:</p><span class='seconds'> " + seconds + "<div style='margin-top: 5px; width: 100%; height: 1px; background: #FF3647'></div><span>Giây</span></span></div>");

        // If the count down is over, write some text 
        if (distance < 0) {

            //Sắp diễn ra - chuyển sang Đang diễn ra
            if (_this.attr("data-dateEnd").length > 0) {

                _this.attr("data-date", _this.attr("data-dateEnd"))
                _this.attr("data-dateEnd", "");

                //TEST
                //clearInterval(x);


            }
            else {
                clearInterval(x);
                _this.html("Đã kết thúc");
            }

        }

        //TEST
        //clearInterval(x);

    }, 1000);
};

function fProductCountDown_Simple(objThis) {

    var _this = $(objThis);
    //alert(_this.attr("data-date"));

    /*console.log("product-countdown: " + _this.attr("data-date"));*/

    // Set the date we're counting down to
    var countDownDate = new Date(_this.attr("data-date")).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (days > 0)
            hours = (days * 24) + hours;

        if (hours < 10)
            hours = "0" + hours;

        if (minutes < 10)
            minutes = "0" + minutes;

        if (seconds < 10)
            seconds = "0" + seconds;

        //  days + "d " + hours + "h " + minutes + "m " + seconds + "s "

        var _title = "<span class='title'>Kết thúc trong</span>";
        if (_this.hasClass('upcoming') && _this.attr("data-dateEnd").length > 0) {
            var _title = "<span class='title'>Bắt đầu sau</span>";
        }

        var _body = "" + _title + "<div class= 'time'><span class='hours'>" + hours + "</span><span class='colon'>:</span><span class='minutes'>" + minutes + "</span><span class='colon'>:</span><span class='seconds'>" + seconds + "</span></div>"

        //alert(_body);

        // Output the result in an element with id="demo"
        _this.html(_body);

        // If the count down is over, write some text 
        if (distance < 0) {

            //Sắp diễn ra - chuyển sang Đang diễn ra
            if (_this.hasClass('upcoming') && _this.attr("data-dateEnd").length > 0) {

                _this.html("");

                var countDownDate_After = new Date(_this.attr("data-dateEnd")).getTime();
                if (countDownDate_After > countDownDate) {
                    _this.attr("data-date", _this.attr("data-dateEnd"))
                    _this.attr("data-dateEnd", "");
                }

                //TEST
                //clearInterval(x);
            }
            else {
                clearInterval(x);
                _this.html("<span class='title'>Đã kết thúc</span>");

                setTimeout(function () {
                    if (_this.hasClass('happenning-reload')) {
                        location.reload();
                    }
                }, 1000);
            }
        }

        //TEST
        //clearInterval(x);

    }, 1000);
};