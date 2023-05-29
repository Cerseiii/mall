let url_type = GetQueryValue('type');
$(function(){
	$(window).on('scroll', () => {
	    if ($(window).scrollTop() > $(window).height() - 80) {
	        $('#return_top').addClass('scrollt')
	    } else {
	        if ($('#return_top').hasClass('scrollt')) {
	            $('#return_top').removeClass('scrollt');
	        }
	    }

	    $('#return_top').off('click').on('click', () => {
	        $("body,html").stop().animate({
	            scrollTop: 0
	        });
	    })
	})

	$('#nav .nav-link').each(function(){
		if ($(this).data('type') == url_type) {
			$(this).addClass('active');
			return true;
		}
	})
})

function GetQueryValue(queryName) {
	var url = window.location.search;
    var query = decodeURI(url.substring(1));
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == queryName) {
            return pair[1];
        }
    }
    return null;
}

function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) ;
}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

function randomNum(minNum, maxNum) { 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 