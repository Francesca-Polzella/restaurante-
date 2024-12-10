 export function mostarAlerta(mensaje){
    const alerta= document.querySelector('.bg-red-100')

    if(!alerta){
      const alert = document.createElement('p')
        alert.classList.add('bg-red-100')
        alert.innerHTML= mensaje
        formulario.appendChild(alert)

        setTimeout(()=>{
            alert.remove()
        },3000)
    }
}