var change  =document.querySelectorAll('.change');
	var size;
	(function(html){//匿名函数
		change()
		function change(){
			var w = html.clientWidth;
			size = 100*(w/2000).toFixed(2);
			if (size<=60) {size=60}
			html.style.fontSize = size+"px"
		}
		window.addEventListener('resize',function () {
			change()
		})
	})(document.documentElement)
	for (var i = 0; i < change.length; i++) {
		change[i].index = i;
		$(change[i]).hover(function() {
			$('.change1').eq($(this).get(0).index).removeClass('select2')
			$('.change1').eq($(this).get(0).index).addClass('select1')
			$('.change2').eq($(this).get(0).index).removeClass('select4')
			$('.change2').eq($(this).get(0).index).addClass('select3')
		},function () {
			$('.change1').eq($(this).get(0).index).removeClass('select1')
			$('.change1').eq($(this).get(0).index).addClass('select2')
			$('.change2').eq($(this).get(0).index).removeClass('select3')
			$('.change2').eq($(this).get(0).index).addClass('select4')
		});
	}
	$('.inner').children().hover(function(){
		$('.bian').eq($(this).index()).removeClass('move2')
		$('.bian').eq($(this).index()).addClass('move1')
	},function(){
		$('.bian').eq($(this).index()).removeClass('move1')
		$('.bian').eq($(this).index()).addClass('move2')
	})
	//****************
	var n=0;
	$('.l').on('click',function(){
		var l= $('.inner').position().left
		var b = $('.inner').children().eq(n).width()
		n++
		$('.inner').animate({left:(l-b)/size+"rem"})
	})
	$('.r').on('click',function(){
		n--
		var l= $('.inner').position().left
		var b = $('.inner').children().eq(n).width()
		$('.inner').animate({left:(l+b)/size+"rem"})
	})
	//*****************
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(106.335915,29.313140);
	map.centerAndZoom(point,19);
	var geoc = new BMap.Geocoder();

	$('.top').on('click',function(){
		var n = -$(window).scrollTop()
		stopFn(n,100)
	})
	var scrollBol = false;
	function stopFn(n,s,type){
		if (scrollBol) {return}
		scrollBol = true;
		var start = $(window).scrollTop();
		var change = n;
		if (type) {change = n - start;}
		var t = 0;
		var endT = 30;
		clearInterval(timer);
		var timer = setInterval(function () {
			t++;
			if (t>=endT) {
				clearInterval(timer);
				scrollBol = false;
			}
			var sTop = 0;
			if (type) {sTop = easeOut(t,start,change,endT);}
			else {sTop = start+t/endT*change;}
			$(window).scrollTop(sTop);
			topnav();
		},s)
		function easeOut(t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		}
	}

	$.fn.extend({
	mousewheel: function(cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",fn);
		}else{
			$(this).get(0).onmousewheel = fn;
		}

		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}
			cb.apply($(this).get(0),[e,down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	}
})
function topnav() {
	var l=$('.header').height()
	if($(window).scrollTop()>=l-10){
		$('.nav').addClass('topnav');
	}else {
		$('.nav').removeClass('topnav');
	}
}
	// $(document).mousewheel(function(e,down){
	// 	var l=$('.header').height()
	// 	if (down) {
	// 		if ($(window).scrollTop()>=0 && $(window).scrollTop()<l) {
	// 			stopFn(l,10,true);
	// 		}
	// 		else if ($(window).scrollTop()>=l){
	// 			stopFn(200,1);
	// 		}
	// 	}else {
	// 		if ($(window).scrollTop()<=l) {
	// 			$('.nav').removeClass('topnav');
	// 			stopFn(0,10,true);
	// 		}else{
	// 			stopFn(-200,1)
	// 		}
	// 	}
	// })