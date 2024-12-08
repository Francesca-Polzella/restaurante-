import { obtenerproducto,editarproducto } from "./api.js";
(function(){
    const nombreINPUT = document.querySelector('#nombre')
    const precioINPUT = document.querySelector('#precio')
    const categoriaINPUT = document.querySelector('#categoria')
    const idINPUT = document.querySelector('#id')

    document.addEventListener('DOMContentLoaded',async()=>{
        const parametroURL= new URLSearchParams(window.location.search)
        console.log(parametroURL)
    })
})()