import { obtenerproducto, editarproducto } from "./api.js"
import { mostarAlerta } from "./alerta.js"
(function(){
    const nombreINPUT = document.querySelector('#nombre')
    const precioINPUT = document.querySelector('#precio')
    const categoriaINPUT = document.querySelector('#categoria')
    const idINPUT = document.querySelector('#id')
    const formulario=document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded',async()=>{
        const parametroURL= new URLSearchParams(window.location.search)
        console.log(window.location.search)
        const idProducto = parseInt(parametroURL.get('id'))
        console.log(idProducto)
        const producto= await obtenerproducto(idProducto)
        console.log(producto)

        mostrarProducto(producto)
        // hacer el regsitro de la actualizacion del producto modificado

        formulario.addEventListener('submit', validarProducto)
    })

    function mostrarProducto(producto){
        const{nombre,precio,categoria,id}= producto
        nombreINPUT.value= nombre
        precioINPUT.value=precio
        categoriaINPUT.value=categoria
        idINPUT.value=id
    }


    async function validarProducto(e){
        e.preventDefault()
        const producto= {
            nombre: nombreINPUT.value,
            precio: precioINPUT.value,
            categoria: categoriaINPUT.value,
            id: parseInt(idINPUT.value)
        }
        if(validar(producto)){
            console.log('todos los campos son obligatorios')
            mostarAlerta(' todos los campos son obligatorios')

            return
        }else{
            await editarproducto(producto)
            window.location.href='index.html'
        }
    }


    function validar(obj){
        return!Object.values(obj).every(i=>i!=='')
    }
    

    
})()