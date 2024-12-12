import{obtenerproductos,eliminarproducto} from"./api.js"

const listado = document.querySelector('#listado-Productos')
document.addEventListener('DOMContentLoaded',mostrarProducto)
listado.addEventListener('click', confirmarEliminar)

 async function confirmarEliminar(e){
    if(e.target.classList.contains('eliminar')){
        //console.log('eliminar')
        const productoID= parseInt(e.target.dataset.producto)
        //console.log(productoID)
        const confirmar= confirm('Quieres eliminar este producto?')
        if(confirmar){
            await eliminarproducto(productoID)
             
        }
    }
}

async function mostrarProducto(){
    const productos = await obtenerproductos()
    //console.log(productos)
    productos.forEach(i=> {
        const{nombre,precio,categoria,id}=i

        const row = document.createElement('tr')
        row.innerHTML+= `
        <td class="px-6 py-4 border-b">
        <p class="font-bold text-sm leanding-5 font-medium text-gray-700
        text-lg">${nombre}</p>
        </td>

        <td class="px-6 py-4 border-b">
        <p class="font-bold text-sm leanding-5 font-medium text-gray-700
        text-lg">${precio}</p>
        </td>

        <td class="px-6 py-4 border-b">
        <pclass="font-bold text-sm leanding-5 font-medium text-gray-700
        text-lg">${categoria}</p>
        </td>


        <td class="px-6 py-4 border-b">
        <a href="../editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900">Editar</a>
        

        <a href="" data-producto=${id} class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
        `
        //en editar no me hace la funcion de llevarme al html
        //en el boton de eliminar no me elimina nada hay un error en la linea 57 del archivo del api 

        listado.appendChild(row)
        
    });
}
