$(document).ready(function(){
	var articleHeight 	= $('.singleArticle').height();//высота статьи
	var offset 			= articleHeight/100*10; //вычисление высоты прокрутки
	var up 				= $('#upArrow');// поиск элемента\кнопки "вверх"
	var sidebarRight 	= document.querySelector('.sidebar-right'); // поиск правого сайдбара
	var foxes 			= sidebarRight.querySelectorAll(".foxy");// создание массива рекламных вертикальных блоков
	var heightFox		= 0;//обнуление высоты вертикальных рекламных блоков
	var formHeight 		= $(".sp-form-outer").offsetHeight;//вычисление высоты формы
	var i 				= 0;//счетчик
	var widgets 		= sidebarRight.querySelectorAll('.widget');// создание массива виджетов сайдбара
	var rNumber 		= Math.round(Math.random() * (foxes.length-1));	// генерация псевдослучайного числа
	var footerHeight 	= document.querySelector('.dpFooter').offsetHeight + document.querySelector('.sector2').offsetHeight;
	var windowHeight 	= document.querySelector('html').offsetHeight;
	var wrap = getComputedStyle(document.querySelector('.wrapper'));
	var d = wrap.marginRight;

	console.log("margin-right = " + d);

	for(i = 0; i<foxes.length; i++){
		heightFox+=foxes[i].offsetHeight + 24;
	}
	for(i = 0; i<widgets.length; i++){
		heightFox+=widgets[i].offsetHeight + 24;
	}
	heightFox = heightFox +450;

	$(window).scroll(function(){
		if($(window).scrollTop() > offset){
			up.fadeIn(750);
		} else{
			up.fadeOut(750);
		}
		var randomBlock = foxes[rNumber];
		if(vpSize() > 960 && ($(window).scrollTop())> heightFox && ($(window).scrollTop()< (windowHeight - footerHeight))){
			d = wrap.marginRight;
			console.log(d);
			randomBlock.style.position = "fixed";
			randomBlock.style.top = "10%";
			if(vpSize()>1200 && vpSize()<1400){
				randomBlock.style.right ="3%";
			}else{
				randomBlock.style.right =d;
			}
		}else{
			randomBlock.style.position = "static";
		}
	});

	up.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({scrollTop:0}, '300');
	});

	function vpSize(){
		return $(window).width();
	}

	console.log(vpSize());
	console.log(heightFox);
	console.log(rNumber);
});