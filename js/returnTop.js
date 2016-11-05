//返回顶部
var returnTop=document.getElementsByClassName("returnTop")[0];
returnTop.onclick=function(){
	// document.body.scrollTop = document.documentElement.scrollTop = 0;
	//开始的位置
	var start=document.body.scrollTop ||document.documentElement.scrollTop;
	// console.log(start);
	//结束的位置
	var end=0;
	var change=end-start;
	//步数
	var endT=100;
	//开始的步数
	var t=0;
	var timer=setInterval(function(){
		if(t>=endT){
			clearInterval(timer);
		}else{
			var returnT=Tween.Bounce.easeOut(t,start,change,endT);
			console.log(returnT);
			// document.body.scrollTop =document.documentElement.scrollTop=returnT+'px';
			document.body.scrollTop = document.documentElement.scrollTop =returnT;
			console.log(document.body.scrollTop ||document.documentElement.scrollTop);
		}

		
		t++;
		
	},30);
	
}