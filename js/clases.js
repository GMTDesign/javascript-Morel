//creo a través de una clase el objeto Productos
class Productos {
    constructor (codigo, descripcion, precio) {
        this.codigo = codigo
        this.descripcion = descripcion
        this.precio = precio
    }    
}
class Carrito {
    constructor (codigo, descripcion, precio, cantidad){
        this.codigo = codigo
        this.descripcion = descripcion
        this.precio = precio
        this.cantidad = cantidad
    }
    precioIVA = () => (this.precio * IVA).toFixed(2)
}    
