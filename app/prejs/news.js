$(document).ready(function(){
	var wdthDoc = document.body.clientWidth;
	if(document.querySelector('.news__item') && wdthDoc>768){
		var newsItems = document.querySelectorAll('.news__item');
		var newsControls = document.querySelectorAll('.news__controls');
		var k = 0;
		$.each(newsControls, function(key){
			newsControls[key].setAttribute('id',key);
			k = key>k?key:k;
		});
		$('.news__contents').on('click', 'div.news__controls', function(e){
			var z = parseInt(this.id);
			newsItems[z].style.zIndex="100";
			newsControls[z].style.backgroundColor="#171b1d";
			for(rt = 0; rt<k+1; rt++){
				if(rt != z){
					newsItems[rt].style.zIndex="0";
					newsControls[rt].style.backgroundColor="#2e3639";
				}
			}
		});
	}
});
