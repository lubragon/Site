function abrirTermo() {
    $("#greyMask")[0].style["display"]= "flex";
    $("#btConfirmar")[0].style["background-color"]= "#001E3D";
}

    
function fecharTermo() {
    $("#greyMask")[0].style["display"]= "none";
    $("#btConfirmar")[0].style["background-color"]= "#005BBC";

}

function pronto() {
	$("#feito")[0].style["display"]= "flex";


    $("#greyMask")[0].style["display"]= "none";
    $("#btConfirmar")[0].style["background-color"]= "#005BBC";

}

function uno() {
	$(".fotos")[0].setAttribute("src","1.png");

	
	$("#bt1")[0].style["background-color"]= "#001E3D";
	$("#bt2")[0].style["background-color"]= "#FFFFFF";
	$("#bt3")[0].style["background-color"]= "#FFFFFF";
}
function dos() {
	$(".fotos")[0].setAttribute("src","2.png");

	$("#bt1")[0].style["background-color"]= "#FFFFFF";
	$("#bt2")[0].style["background-color"]= "#001E3D";
	$("#bt3")[0].style["background-color"]= "#FFFFFF";
}
	

function tres() {
	$(".fotos")[0].setAttribute("src","3.png");

	$("#bt1")[0].style["background-color"]= "#FFFFFF";
	$("#bt2")[0].style["background-color"]= "#FFFFFF";
	$("#bt3")[0].style["background-color"]= "#001E3D";

}


