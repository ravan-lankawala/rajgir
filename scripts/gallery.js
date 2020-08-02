function upDate(previewPic){
  x=document.getElementById('view');
  x.innerHTML=previewPic.alt;
  x.style.backgroundImage="url("+previewPic.src+")";
  
  
	}

	function unDo(){

 document.getElementById('view').innerHTML="Hover over an image below to display here.";
    document.getElementById('view').style.backgroundImage="url('')";
}