$(document).ready(function(){
	var articleHeight = $('.singleArticle').height();
	var offset = articleHeight/100*10;
	var up = $('#upArrow');
	$(window).scroll(function(){
		if($(window).scrollTop() > offset){
			up.fadeIn(750);
		} else{
			up.fadeOut(750);
		}
	});
	up.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop:0}, '300');
	});
});