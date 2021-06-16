var scroll = null;
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	
	document.getElementById("myBody").style.marginTop = (-100 - 0.5*scroll) + "px";
    console.log(scroll);
	if(scroll >= 300){
		$("#myNav").addClass("bg-dark");
	} else {
		$("#myNav").removeClass("bg-dark");
	}
});