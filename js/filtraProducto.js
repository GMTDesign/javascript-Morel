function filtraProducto() {
    //cargo los elementos del array
    activaProductos()
    let buscar = prompt("Ingrese el nombre del producto a filtrar:").trim().toUpperCase()
    if (buscar === "") {
        alert("No ingresó ningún producto a buscar")
    } else {
        let busqueda = productos.filter(elemento => elemento.descripcion.includes(buscar))
        console.log("Se encontró la siguiente información \n")
        console.table(busqueda)
    }
    consulta()
}
