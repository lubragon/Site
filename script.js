
var wa = document.getElementById("grey")
var we = document.getElementById("sala")

    
function abrirTermo() {
    $("#greyMask")[0].style["display"]= "flex";
    $("#btConfirmar")[0].style["background-color"]= "#005BBC";
}

    
function fecharTermo() {
    $("#greyMask")[0].style["display"]= "none";
    $("#btConfirmar")[0].style["background-color"]= "white";

}



var slider_img = $(".slider");
var images = ['1.png', '2.png', '3.png'];
var i = 0;


function fotoNext() {
    $(".fotos")[0].attr["src"]= "2.png";		 
}


function fotoPrev() {
    $(".fotos")[0].attr("src","2.png");

}



function setImg(){
	return slider_img.setAttribute('src', "images/" + images[i]);
	
}













/*
document.querySelector("#sala")

var slider_img = $(".slider");
var images = ['1.png', '2.png', '3.png'];
var i = 0;


function fotoNext(){
	if (i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}


function fotoPrev() {
	if (i <= 0) i = images.length;	
	i--;
	return setImg();			 
} 


function setImg(){
	return slider_img.setAttribute('src', "images/" + images[i]);
	
}
*\
