function moveMiranda(){
	var adfox = document.querySelectorAll('.foxy');
	var rb = document.querySelector('.dblArcticles');
	if(adfox){
		for(var i=0; i<2; i++){
			if(adfox[i]){
				rb.appendChild(adfox[i]);
			}
		}	
	}
}
function invMiranda(){
	var adfox = document.querySelectorAll('.foxy');
	var sidebar = document.querySelector('.sidebar-right');
	var caty = document.querySelector('.widget_categories');
	if(adfox){
		for( i = 0; i<2; i++){
			adfox[i].style.marginRight = "0";
			if(adfox[i]){
				if(i==0){
					sidebar.insertBefore(adfox[i],caty);
				}
				else{
					sidebar.insertBefore(adfox[i],caty.nextSibling);	
				}	
			}
		}
	}
}
// $(window).resize(function(){
// 	var width=document.body.clientWidth;
// 	if(width<=960){
// 		moveMiranda();
// 	}else{
// 		invMiranda();
// 	}
// });
window.onresize = function(event){
	var width=document.body.clientWidth;
	if(width<=960){
		moveMiranda();
	}else{
		invMiranda();
	}
}

$(document).ready(function(){
	var loadWidth = document.body.clientWidth;
	if(loadWidth<=960){
		moveMiranda(loadWidth);
	}else{
		invMiranda();
	}
});