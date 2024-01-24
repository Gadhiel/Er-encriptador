function encriptar() {
    var inputUsuario = document.getElementById("cifrado").value.toLowerCase();

    var textoEncriptado = inputUsuario.replace(/e/img, "enetr");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("desifrado").innerHTML = textoEncriptado;
}

function desEncriptar() {
    var inputUsuario = document.getElementById("cifrado").value.toLowerCase();

    var textoEncriptado = inputUsuario.replace(/enetr/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("desifrado").innerHTML = textoEncriptado;
}

function copiar() {
    var contenido = document.querySelector("#desifrado");
    contenido.select();
    document.execCommand("copy");
}