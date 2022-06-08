
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

var foc = $(".fotos")[0];
var ve = $("#vera")[0];
var vasofia = 	$("#btsofia")[0].style["background-color"]= "#9c0c0c";
var vavera = $("#btvera")[0].style["background-color"]= "#9c0c0c";

function uno() {
	if (vasofia = true) { 
		$(".fotos")[0].setAttribute("src","1.png");
		
	} 
	else if (vavera = true) {
		$(".fotos")[0].setAttribute("src","Lucia.png");
	}

	else {
		$("#sofia3")[0].style["display"]= "none";
		$("#teste3")[0].style["display"]= "none";
	}
	
	
}

// f unction uno() {
// 	if (vavera ="#9c0c0c") { 
// 		$(".fotos")[0].setAttribute("src","1.png");
		
// 	} 
// 	else if (vasofia ="#9c0c0c") {
// 		$(".fotos")[0].setAttribute("src","Lucia.png");
// 	}

// 	else {
// 		$("#sofia3")[0].style["display"]= "none";
// 		$("#teste3")[0].style["display"]= "none";
// 	}
	
	
// }



function dos() {
	$(".fotos")[0].setAttribute("src","2.png");
}

function tres() {
	$(".fotos")[0].setAttribute("src","3.png");
}

function clicsof() {
	$("#teste1")[0].style["display"]= "none";
	$("#teste2")[0].style["display"]= "none";
	$("#teste3")[0].style["display"]= "none";

	$("#sofia1")[0].style["display"]= "grid";
	$("#sofia2")[0].style["display"]= "grid";
	$("#sofia3")[0].style["display"]= "grid";

	$("#btsofia")[0].style["background-color"]= "#9c0c0c";
	$("#btvera")[0].style["background-color"]= "white";
}

function clicvera() {
	$("#teste1")[0].style["display"]= "grid";
	$("#teste2")[0].style["display"]= "grid";
	$("#teste3")[0].style["display"]= "grid";

	$("#sofia1")[0].style["display"]= "none";
	$("#sofia2")[0].style["display"]= "none";
	$("#sofia3")[0].style["display"]= "none";

	$("#btsofia")[0].style["background-color"]= "white";
	$("#btvera")[0].style["background-color"]= "#9c0c0c";
}




// $("#vera2")[0].style["display"]= "";
// $("#vera3")[0].style["display"]= "";

// $("#sofia1")[0].style["display"]= "none";
// $("#sofia2")[0].style["display"]= "none";
// $("#sofia3")[0].style["display"]= "none";

// $("#dom")[0].style["background-color"]= "#005BBC";

