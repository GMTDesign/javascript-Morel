function menuCliente() {
    let menu = "Menú del Cliente \n" +
    "1 - Buscar un producto \n" +
    "2 - Filtrar productos \n" +
    "3 - Realizar una compra \n"
    let eleccion = parseInt(prompt("👁‍🗨 Seleccione una opción del menú: \n" + menu))
    if (eleccion === "" || isNaN(eleccion) || eleccion > 3){
        consulta()
    } else {
        switch (eleccion){
            case 1:
                buscaProducto()
            break;
            case 2:
                filtraProducto()
            break;
            case 3:
                muestroProducto()
            break; 
        }    
    }
}
// creo un bucle mediante el confirm
function consulta(){
    let respuesta = confirm ("¿Desea volver al menú?") 
    if (respuesta) {
        menuCliente()
    } else {
        alert ("😃 Esperamos su próxima visita!!!")
    }
}