//cargo elementos al array productos de manera estática
function cargaProductos() {
    productos.push(new Productos ('2005', 'SOFA COLOR GRIS', 25000))
    productos.push(new Productos ('2010', "SOFA COLOR NEGRO", 25000))
    productos.push(new Productos ('2015', "SILLA COLOR NEGRO", 7000))
    productos.push(new Productos ('2020', "SILLA COLOR BLANCO", 7000))
    productos.push(new Productos ('2025', "MESA DE MADERA NEGRA", 30000))
    productos.push(new Productos ('2030', "MESA BASE EN MADERA CON TAPA DE VIDRIO", 35000))
    productos.push(new Productos ('2035', "JUEGO DE COMEDOR", 70000))
}
function activaProductos() {
    // blanqueo los arrays
    while (productos.length > 0) {
        productos.pop()
    }
    while (carrito.length > 0) {
        carrito.pop()
    }
    //cargo los elementos del array
    cargaProductos()
}
    