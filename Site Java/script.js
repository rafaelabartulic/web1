
console.log(document.querySelector(".proxima"))
//obejto pronto javascript

let botaoProxima = document.querySelector(".proxima")
let botaoAnterior = document.querySelector(".anterior")
let listaimagens = document.querySelectorAll("img")
let contador = 0

botaoProxima.onclick = function passarSlider() {
document.querySelector("img.ativo").classList.remove("ativo")

contador = contador + 1

if (contador >= listaimagens.length) {
    contador = 0
}

listaimagens[contador].classList.add("ativo")
}

botaoAnterior.onclick = function voltarSlider() {
document.querySelector("img.ativo").classList.remove("ativo")

if(contador > 0) {
    contador = contador - 1
} else {
    contador = listaimagens.length - 1
}

listaimagens[contador].classList.add("ativo")
}