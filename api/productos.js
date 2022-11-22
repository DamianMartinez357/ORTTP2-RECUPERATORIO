import config from '../config.js'
import ProductosFactoryDAO from '../model/DAO/productosFactory.js'


class ApiProductos {
    constructor() {

        this.productosModel = ProductosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }
    async obtenerProductos() { 
        let productos = await this.productosModel.findProductos()
        let cant = productos.length
        if(cant){
            return productos
        }else{
            let mensaje = {'mensaje: ': 'No hay productos para listar'}
            return {mensaje}
        }
        
    }

    guardarProducto = async producto => {
        return await this.productosModel.saveProducto(producto)
    }
    
    async obtenerEstadisticas() {
        try {
            
            let productos = await this.productosModel.findProductos()
            let sum = 0
            let cant = productos.length

            if (cant){

                let minMax = await (this.obtenerMinMax(productos))
                console.log(minMax)
                for(let i=0; i<cant; i++) {

                    let productoActual = productos[i]
                    let precioActual = productoActual.precio
                    sum += precioActual
                }
                
                let promedio = sum / cant
                return {'promedio:':promedio,
                        'suma:':sum,
                        'maximo:':{'precioMaximo: ': minMax.max, 
                                    'nombreProducto': minMax.productoMax.nombre},
                        'minimo:':{'precioMinimo:':minMax.min,
                                    'nombreProducto':minMax.productoMin.nombre}}
            }else{
                return {'mensaje:': 'No hay información para analizar'}
            }
        }
        catch(error) {
            console.log(error)
        }
    }
    async obtenerMinMax(array) {
        try {
            if(array.length > 0){

                let min = array[0].precio
                let max = array[0].precio
                let productoMax = array[0]
                let productoMin = array[0]
                let cant = array.length
                
                for(let i=0; i<cant; i++) {
                    if(array[i].precio > max){
                        max = array[i].precio
                        productoMax = array[i]
                    } 
                    if(array[i].precio < min){
                        min = array[i].precio
                        productoMin = array[i]
                    } 
                }
                return {'min':min,'max':max,'productoMin':productoMin,'productoMax':productoMax}

            }else{
                return {}
            }
        }
        
        catch(error) {
                console.log('error obtenerMinMax', error)
        }
    }
}
export default ApiProductos