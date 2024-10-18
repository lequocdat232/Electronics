//$(document).ready(function () {
//    //if ($(".xxx").hasClass("productcountdown-view")) {
//    $(".productcountdown-view").each(function (index) {
//        fProductCountDown($(this));
//    });
//    //}
//});
//function fProductCountDown(objThis) {

//    var _this = $(objThis);
//    //alert(_this.attr("data-date"));

//    /*console.log("product-countdown: " + _this.attr("data-date"));*/

//    // Set the date we're counting down to
//    var countDownDate = new Date(_this.attr("data-date")).getTime();

//    // Update the count down every 1 second
//    var x = setInterval(function () {

//        // Get today's date and time
//        var now = new Date().getTime();

//        // Find the distance between now and the count down date
//        var distance = countDownDate - now;

//        // Time calculations for days, hours, minutes and seconds
//        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//        if (days > 0)
//            hours = (days * 24) + hours;

//        if (hours < 10)
//            hours = "0" + hours;

//        if (minutes < 10)
//            minutes = "0" + minutes;

//        if (seconds < 10)
//            seconds = "0" + seconds;

//        //  days + "d " + hours + "h " + minutes + "m " + seconds + "s "

//        // Output the result in an element with id="demo"
//        _this.html("<div class= 'time'><span class='hours'> " + hours + "<div style='margin-top: 5px; width: 100%; height: 1px; background: #FF3647'></div><span>Giờ</span></span><p style='font-size: 28px; line-height: 18px; font-weight: bold; color: #101010; margin: 0 7px'>:</p><span class='minutes'> " + minutes + "<div style='margin-top: 5px; width:100%; height: 1px; background: #FF3647'></div><span>Phút</span></span><p style='font-size: 28px; line-height: 18px; font-weight: bold; color: #101010; margin: 0 7px'>:</p><span class='seconds'> " + seconds + "<div style='margin-top: 5px; width: 100%; height: 1px; background: #FF3647'></div><span>Giây</span></span></div>");

//        //clearInterval(x);

//        // If the count down is over, write some text 
//        if (distance < 0) {

//            if (_this.attr("data-dateEnd").length > 0) {

//                location.reload();

//                _this.attr("data-date", _this.attr("data-dateEnd"))
//                _this.attr("data-dateEnd", "");
//            }
//            else {
//                clearInterval(x);
//                _this.html("Đã kết thúc");
//            }

//        }
//    }, 1000);
//};