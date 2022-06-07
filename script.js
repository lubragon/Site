
var wa = document.getElementById("grey")

    
function abrirTermo() {
    $("#greyMask")[0].style["display"]= "flex";
    $("#btConfirmar")[0].style["background-color"]= "#005BBC";
}

    
function fecharTermo() {
    $("#greyMask")[0].style["display"]= "none";
    $("#btConfirmar")[0].style["background-color"]= "white";

}

function fotoum() {
    // Vera
    $("#sala")[0].style["zIndex"]= "3";
    $("#quarto")[0].style["zIndex"]= "2";
    $("#cozinha")[0].style["zIndex"]= "2";

    // Sofia
    $("#salaSofia")[0].style["zIndex"]= "3";
    $("#quartoSofia")[0].style["zIndex"]= "2";
    $("#cozinhaSofia")[0].style["zIndex"]= "2";

    // Lucia
    $("#salaLucia")[0].style["zIndex"]= "3";
    $("#quartoLucia")[0].style["zIndex"]= "2";
    $("#cozinhaLucia")[0].style["zIndex"]= "2";

    // Roberta
    $("#salaRoberta")[0].style["zIndex"]= "3";
    $("#quartoRoberta")[0].style["zIndex"]= "2";
    $("#cozinhaRoberta")[0].style["zIndex"]= "2";
    // Botoes
    $("#but1")[0].style["background-color"]= "#005BBC";
    $("#but2")[0].style["background-color"]= "white";
    $("#but3")[0].style["background-color"]= "white";

}

function fotodois() {
    // Vera
    $("#sala")[0].style["zIndex"]= "2";
    $("#cozinha")[0].style["zIndex"]= "3";
    $("#quarto")[0].style["zIndex"]= "2";

    // Sofia
    $("#salaSofia")[0].style["zIndex"]= "2";
    $("#cozinhaSofia")[0].style["zIndex"]= "3";
    $("#quartoSofia")[0].style["zIndex"]= "2";

    // Lucia
    $("#salaLucia")[0].style["zIndex"]= "2";
    $("#cozinhaLucia")[0].style["zIndex"]= "3";
    $("#quartoLucia")[0].style["zIndex"]= "2";

    // Roberta
    $("#salaRoberta")[0].style["zIndex"]= "2";
    $("#cozinhaRoberta")[0].style["zIndex"]= "3";
    $("#quartoRoberta")[0].style["zIndex"]= "2";

    // Botoes
    $("#but1")[0].style["background-color"]= "white";
    $("#but2")[0].style["background-color"]= "#005BBC";
    $("#but3")[0].style["background-color"]= "white";
}

function fototres() {
    // Vera
    $("#sala")[0].style["zIndex"]= "2";
    $("#cozinha")[0].style["zIndex"]= "2";
    $("#quarto")[0].style["zIndex"]= "3";

    // Sofia
    $("#salaSofia")[0].style["zIndex"]= "2";
    $("#cozinhaSofia")[0].style["zIndex"]= "2";
    $("#quartoSofia")[0].style["zIndex"]= "3";

    // Lucia
    $("#salaLucia")[0].style["zIndex"]= "2";
    $("#cozinhaLucia")[0].style["zIndex"]= "2";
    $("#quartoLucia")[0].style["zIndex"]= "3";

    // Roberta
    $("#salaRoberta")[0].style["zIndex"]= "2";
    $("#cozinhaRoberta")[0].style["zIndex"]= "2";
    $("#quartoRoberta")[0].style["zIndex"]= "3";

    // Botoes
    $("#but1")[0].style["background-color"]= "white";
    $("#but2")[0].style["background-color"]= "white";
    $("#but3")[0].style["background-color"]= "#005BBC";
}



function sofia() {
    // Tudo da Vera fica invisivel
    $("#veraFotos")[0].style["display"]= "none";
    $("#veraProfile")[0].style["display"]= "none";
    $("#veraInfo")[0].style["display"]= "none";

    // Tudo da Lucia fica invisível
    $("#luciaInfo")[0].style["display"]= "none";

    // Tudo da Roberta fica invisível
    $("#robertaInfo")[0].style["display"]= "none";

    // Tudo da Sofia aparece
    $("#sofiaInfo")[0].style["display"]= "flex";

    // Botão de voltar
    $("#voltar")[0].style["display"]= "flex";

}

function lucia() {
    // Tudo da Vera fica invisivel
    $("#veraFotos")[0].style["display"]= "none";
    $("#veraProfile")[0].style["display"]= "none";
    $("#veraInfo")[0].style["display"]= "none";

    // Tudo da Sofia fica invisível
    $("#sofiaInfo")[0].style["display"]= "none";

    // Tudo da Roberta fica invisível
    $("#robertaInfo")[0].style["display"]= "none";

    // Tudo da Lucia aparece
    $("#luciaInfo")[0].style["display"]= "flex";

    // Botão de voltar
    $("#voltar")[0].style["display"]= "flex";
}

function roberta() {
    // Tudo da Vera fica invisivel
    $("#veraFotos")[0].style["display"]= "none";
    $("#veraProfile")[0].style["display"]= "none";
    $("#veraInfo")[0].style["display"]= "none";

    // Tudo da Sofia fica invisível
    $("#sofiaInfo")[0].style["display"]= "none";

    // Tudo da Lucia fica invisível
    $("#luciaInfo")[0].style["display"]= "none";

    // Tudo da Roberta aparece
    $("#robertaInfo")[0].style["display"]= "flex";

    // Botão de voltar
    $("#voltar")[0].style["display"]= "flex";
}


function volta() {
    // Tudo da Sofia fica invisível
    $("#sofiaInfo")[0].style["display"]= "none";
    // Tudo da Lucia fica invisível
    $("#luciaInfo")[0].style["display"]= "none";
    // Tudo da Roberta fica invisível
    $("#robertaInfo")[0].style["display"]= "none";

    // Tudo da Vera fica aparece
    $("#veraFotos")[0].style["display"]= "flex";
    $("#veraProfile")[0].style["display"]= "flex";
    $("#veraInfo")[0].style["display"]= "flex";

    // Botão de voltar
    $("#voltar")[0].style["display"]= "none";

}