$(document).ready(function(){
var li1 	 = document.querySelector('.sm1'),
	li2 	 = document.querySelector('.sm2'),
	sm1 	 = li1.querySelector('ul'),
	sm2 	 = li2.querySelector('ul'),
	count1 	 = 0,
	count2	 = 0;
		li1.onclick = function(){
			if(count1%2 == 0){
				sm1.style.display = "block";
				sm2.style.display = "none";
				count2 = 0;
			} else{
				sm1.style.display = "none";
			}
			count1++;
		};
		li2.onclick = function(){
			if(count2%2 == 0){
				sm2.style.display = "block";
				sm1.style.display = "none";
				count1 = 0;
			} else{
				sm2.style.display = "none";
			}
			count2++;
		};	
	});