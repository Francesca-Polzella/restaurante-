import{obtenerproductos} from "./api"

const listado = document.querySelector('#listado-Productos')
document.addEventListener('DOMContentLoaded',mostrarProducto)
listado.addEventListener('click', confirmarEliminar)

function confirmarEliminar(e){
    if(e.target.classList.contains('eliminar')){
        //console.log('eliminar')
        const productoID= parseInt(e.target.dataset.producto)
        //console.log(productoID)
        const confirmar= confirm('Quieres eliminar este producto?')
        if(confirmar){
            //await eliminarproducto(productoID)
            // ver que pasa con este error 
        }
    }
}

async function mostrarProducto(){
    const productos = await obtenerproductos()
    console.log(productos)
    productos.forEach(i=> {
        const{nombre,precio,categoria,id}=i

        const row = document.createElement('tr')
        row.innerHTML+= `
        <td class="px-6 py-4 border-b">
        <p>${nombre}</p>
        </td>

        <td class="px-6 py-4 border-b">
        <p>${precio}</p>
        </td>

        <td class="px-6 py-4 border-b">
        <p>${categoria}</p>
        </td>


        <td class="px-6 py-4 border-b">
        <a herf="editar-producto.html?id=${id}" class="text-teal-600 hover:text-teal-900">Editar</a>
        <aherf="data-producto=id=${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
        </td>
        `

        listado.appendChild(row)
        
    });
}
