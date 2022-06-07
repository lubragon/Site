
var wa = document.getElementById("grey")

    
function abrirTermo() {
    $("#greyMask")[0].style["display"]= "flex";
    $("#btConfirmar")[0].style["background-color"]= "#005BBC";
}

    
function fecharTermo() {
    $("#greyMask")[0].style["display"]= "none";
    $("#btConfirmar")[0].style["background-color"]= "white";

}

// var image = document.querySelector("#cozinha")
// var wa = document.getElementsByClassName(".fotos")
// document.querySelector("#sala").src= '2.png';


// function fotoNext() {
//     $("#sala")[0].src='2.png';
// }


// document.querySelector("#cozinha")

var slider_img = document.querySelector('.slider-img');
var images = ['1.png', '2.png', '3.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}