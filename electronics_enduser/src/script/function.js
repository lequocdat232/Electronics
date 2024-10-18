function feSwViewMore(objParent) {

    if ($(objParent).length > 0) {

        if ($(objParent).find(".esw-viewmore-content-show").length > 0) {

            $(objParent).find(".esw-viewmore-content-show").each(function () {
                $(this).removeClass("esw-viewmore-content-show");
            });

            $(objParent).find(".esw-viewmore-btn").html = "Thu gọn";
        }
        else if ($(objParent).find(".esw-viewmore-content").length > 0) {

            $(objParent).find(".esw-viewmore-content").each(function () {
                $(this).addClass("esw-viewmore-content-show");
            })

            $(objParent).find(".esw-viewmore-btn").html = "Xem thêm";
        }

        //https://www.w3schools.com/howto/howto_js_read_more.asp

        //var dots = document.getElementById("dots");
        //var moreText = document.getElementById("more");
        //var btnText = document.getElementById("myBtn");

        //if (dots.style.display === "none") {
        //    dots.style.display = "inline";
        //    btnText.innerHTML = "Read more";
        //    moreText.style.display = "none";
        //} else {
        //    dots.style.display = "none";
        //    btnText.innerHTML = "Read less";
        //    moreText.style.display = "inline";
        //}
    }
};

function fCheckValue(value) {
    if ($.type(value) == 'null'
        || $.type(value) == 'undefined'
        || $.trim(value) == '') {
        return false;
    }
    return true;
};

function fIsValue(value, def, is_return) {
    if ($.type(value) == 'null'
        || $.type(value) == 'undefined'
        || $.trim(value) == ''
        || ($.type(value) == 'number' && !$.isNumeric(value))
        || ($.type(value) == 'array' && value.length == 0)
        || ($.type(value) == 'object' && $.isEmptyObject(value))) {
        return ($.type(def) != 'undefined') ? def : false;
    } else {
        return ($.type(is_return) == 'boolean' && is_return === true ? value : true);
    }
};

function fGetUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function fConvertToCurrencyUrl(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+6

        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(0) + "-trieu"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+5

            ? (Math.abs(Number(labelValue)) / 1.0e+5).toFixed(0) + "-ngan"
            : Math.abs(Number(labelValue));

};

function fConvertToCurrency(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + " tỷ"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+7

            ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(0) + " triệu"
            // Three Zeroes for Thousands
            : Math.abs(Number(labelValue)) >= 1.0e+6

                ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1) + " triệu"
                : Math.abs(Number(labelValue)) >= 1.0e+3

                    ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(0) + " ngàn"
                    : Math.abs(Number(labelValue));

};

/*Cookie*/
function fCookie_SetExpire(hours) {
    var dayt = new Date();
    dayt.setTime(dayt.getTime() + (hours * 60 * 60 * 1000));
    return dayt;
}
function fCookie_Set(name, value, expire, path, domain, secure) {

    var CookieString = name + "=" + escape(value);

    if (expire) {
        exp = fCookie_SetExpire(expire);
        CookieString += "; expires=" + exp;
    }
    if (path) {
        CookieString += "; path=" + escape(path);
    }
    if (domain) {
        CookieString += "; domain=" + escape(domain);
    }
    if (secure) {
        CookieString += "; secure";
    }
    document.cookie = CookieString;
}
function fCookie_Get(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}
function fCookie_Check(check, query) {

    if (!fCookie_Get(check)) {
        var value = prompt(query, "");
        fCookie_Set(check, value, 4, false, false, false);
    }

    var username = fCookie_Get("username");
    document.write("Hi " + username + ", welcome to my website!");
    document.write("<a href=\"javascript: fCookie_Erase('" + username + "'); document.location.reload();> Forget about me! </a>");
}
function fCookie_Erase(name) {
    fCookie_Set(name, "", -1, false, false, false);
}
/*Cookie*/