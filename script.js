var settings;

var isJsPage = !!window.location.href.match(/_\/apps-static\//);


function image_show(){
	var img_src = window.location.hash.match(/(#)([a-z 0-9]{40})$/);
	if( (img_src !== null) && img_src.hasOwnProperty('2') ){
	    $('#container').css({maxWidth:'none', width:'auto'});
		$('#sidebar, .box-body *').hide();
		$('#page .box-body').prepend('<img src="http://m.friendfeed-media.com/' + img_src[2] + '">');
	}else{
		$('#page .box-body').prepend('<div style="color:red;font-size:14px;margin:2em">ERROR: Incorrect image identifier in URL fragment. Image cannot be displayed.</div>');
	}
	$('.box-bar-text a').attr('href', '#').text('Friendfeed Image Zoom Extension by Micah Wittman');
}

function image_zoom(){
	function main_loop(){
		var imgs = $('#feed .ebody .media .container img.thumbnail');
		$(imgs).each(function(){
			var a = $(this).parent();
			var img_lg_href = a.attr('href');
			if( img_lg_href.indexOf('http://m.friendfeed-media.com/') == 0 ){
				var img_src_name =  img_lg_href.split("/")[3];
				if( !a.hasClass('ffiz') ){
					a.addClass('ffiz').attr('href', 'http://friendfeed.com/search/advanced#' + img_src_name).attr('target', '_blank');
				}
			}
		});
	}

	/****** Start main_loop ******/
	main_loop(); //run once for immediate effect (especially important for on single post view)
	setInterval(main_loop, 2000); //run in loop
}


function onLoad() {
	/****** Run App ******/
	if( window.location.href.indexOf('http://friendfeed.com/search/advanced#') == 0 ){
		image_show();
	}else{
		image_zoom();
	}
}

if (!isJsPage) {
	document.addEventListener("DOMContentLoaded", onLoad);
}