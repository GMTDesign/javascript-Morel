function buscaProducto() {
    //cargo los elementos del array
    activaProductos()
    let buscar = prompt("Ingrese el nombre del producto a buscar:").trim().toUpperCase()
        if (buscar !== "") {
            let busqueda = productos.find(elemento => elemento.descripcion.includes(buscar))
            if (busqueda === undefined) {
                alert("No se encontró ningún producto")
            } else {
                console.log("Se encontró el siguiente producto \n")
                console.log(busqueda)
                console.warn(" Puede que existan más coincidencias \n" +
                "Si lo desea seleccione Filtrar productos desde el Menú")
            }
        } else {
            alert("No ingresó ningún producto a buscar")
        }
    consulta()
}

