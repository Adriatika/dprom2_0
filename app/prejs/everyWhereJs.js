$(document).ready(function(){
var li1 	 = document.querySelector('.sm1'),
	li2 	 = document.querySelector('.sm2'),
	li1A	 = li1.querySelector('a'),
	li2A	 = li2.querySelector('a'),
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
		li2A.onclick = function(e){
			e.preventDefault();
		}
		li1A.onclick = function(e){
			e.preventDefault();
		}
		/*Вырезание формы из сайдбара и врезка в всплывающий wrapper*/
	var upFrom 	= document.querySelector("#pp"),
		close 	= document.querySelector("#ppCl"),
		popupW 	= document.querySelector(".popupWrapper"),
		popupF 	= document.querySelector("#ppForm");

			console.log(typeof(formD)) ; 
		upFrom.onclick = function(e){
			e.preventDefault();
			var formD	= document.querySelector("#sp-form-118170");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
			popupF.append(formD);
			popupW.style.display="block";
			popupF.style.display="block";  
		}
		close.onclick=function(){
			var formD	= document.querySelector("#sp-form-118170");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
			popupW.style.display="none";	
			popupF.style.display="none";	
			spWrap.appendChild(formD);
		}
		popupW.onclick = function(){
			var formD	= document.querySelector("#sp-form-118170");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
			popupW.style.display="none";
			popupF.style.display="none";	
			spWrap.appendChild(formD);		
		}
		 $(this).keydown(function(e){
		 	if(e.which == 27){
			var formD	= document.querySelector("#sp-form-118170");
			var spWrap 	= document.querySelector(".sp-form-outer") ;
              		popupW.style.display="none";
					popupF.style.display="none";	
					spWrap.appendChild(formD);
				}
     			});
	});
