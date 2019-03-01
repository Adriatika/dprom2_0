function moveMiranda(){
	var adfox = document.querySelector('.foxy');
	var miranda = document.querySelector('.miranda');
	var  i = 0;
	console.log(typeof(adfox));
	miranda.appendChild(adfox);
	miranda.style.display="block";
}
moveMiranda();