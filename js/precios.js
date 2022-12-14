function listaMercaderia(){
    let mercaderia = "Lista de productos: \n" +
                    "1 - Silla plástica para comedor \n" +
                    "2 - Sofá de cuero \n" +
                    "3 - Sillón de cuero 3 cuerpos \n"
    let seleccion = parseInt(prompt("Seleccione el producto a consultar: \n" + mercaderia))
        if (seleccion ==="" || isNaN(seleccion) || seleccion > 3){
            alert("Ingrese un dato numérico de la lista")    
        } else {
            switch (seleccion){
                case 1:
                    let nombre1 = "Silla plástica"
                    let importe1 = 5000
                    financiacion(nombre1, importe1)
                    break;
                case 2:
                    let nombre2 = "Sofá de cuero"
                    let importe2 = 20000
                    financiacion(nombre2, importe2) 
                    break;
                case 3:
                    let nombre3 = "Sillón de cuero 3 cuerpos"
                    let importe3 = 50000
                    financiacion(nombre3, importe3)
                    break;   
            }    
        }    
    consulta()
}
// creo un loop mediante el confirm
function consulta(){
    let respuesta = confirm ("¿Desea consultar algún producto?") 
    if (respuesta) {
        listaProductos()
    } else {
        alert ("Esperamos su próxima visita!!!")
    }
}
// realizo los cálculos sobre formas de pago
function financiacion(nombre, importe){
    let contado = importe - importe * 10 / 100
    let tres = importe / 3
    let seis = importe / 6
    let doce = importe /12
    alert("Producto: " + nombre +  
        "\n Precio de lista: $" + importe +
        "\n Pago contado con descuento $: " + contado.toFixed(2) +
        "\n Financiación en tres cuotas $: " + tres.toFixed(2) +
        "\n Financiación en seis cuotas $: " + seis.toFixed(2) +
        "\n Financiación en doce cuotas $: " + doce.toFixed(2)) 
}