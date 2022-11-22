import ProductosMemDAO from './productosMem.js'
import ProductosMongoDAO from './productosMongoDB.js'

class ProductosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'DESA' :
                console.log(' ***** DESARROLLO - Persistiendo en Memoria ***** ')
                return new ProductosMemDAO()

            case 'PROD' :
                console.log(' ***** PRODUCCION - Persistiendo en MongoDB ***** ')
                return new ProductosMongoDAO()

            default: 
                console.log(' ***** DESARROLLO - Persistiendo en default (Memoria) ***** ')
                return new ProductosMemDAO()
        }
    }
}

export default ProductosFactoryDAO