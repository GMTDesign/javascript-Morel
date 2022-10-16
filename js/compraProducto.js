// muestro los elementos del array productos
function muestroProducto() {
    //cargo los elementos del array
    activaProductos()
    console.table(productos)
    //llamo a la función para que el cliente seleccione productos
    seleccionarProducto()    
}
/*  permito al cliente seleccionar códigos de productos
    y controlo que la información sea correcta */
function seleccionarProducto() {
        let seleccion = prompt("Ingrese el código del producto:")
        let resultado = productos.find(elemento => elemento.codigo === seleccion)
        if (resultado === undefined) {
            alert("Código de producto inexistente")
            let respuesta = confirm("¿Desea ingresar un nuevo código de producto?")
            if(!respuesta){
                controloCarrito()
            }else{
                seleccionarProducto()
            }
        }else{
            procesarProducto(resultado)
        }
    }
/*  por cada código de producto, pido al cliente la cantidad  
    que desea comprar - controlo que ingrese un número. Si no 
    es así vuelvo a la función seleccionarProducto */ 
function procesarProducto(resultado) {
    let cantidad = parseInt(prompt("Ingrese la cantidad a comprar:"))
    if (cantidad ==="" || isNaN(cantidad)){
        alert("Ingrese una cantidad!!!") 
        seleccionarProducto()
    }else{
        let respuesta1 = confirm("¿Desea agregar el producto al Carrito?")
        if (respuesta1){
            altaCarrito(resultado, cantidad)
        }
        let respuesta2 = confirm("Desea seleccionar otro producto")
            if (respuesta2){
                seleccionarProducto()
            } else {
                controloCarrito()
            } 
    }
}

// cargo en el array carrito los producto seleccionados
function altaCarrito(resultado, cantidad){
    carrito.push(new Carrito(resultado.codigo, resultado.descripcion, resultado.precio, cantidad))
    console.table(carrito)
}
//  realizo la sumatoria de la compra 
function concretarCompra() {
    let total = carrito.reduce((acc, elemento) => acc + elemento.precioIVA() * elemento.cantidad, 0)
    console.log("El importe total de su compra asciende a: $", total)
}
// controlo si se seleccionaron productos
const controloCarrito = () => {
    if (carrito.length > 0) {
        let compra = confirm("¿Desea concretar la compra?")
        if (compra){
            concretarCompra()
        }   
    }
    consulta()
}    