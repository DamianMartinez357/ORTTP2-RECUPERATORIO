import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"

class ProductosMongoDAO {

    findProducto = async id => {
        if(!CnxMongoDB.connection) return {}
        let producto = await CnxMongoDB.db.collection('productos').findOne({_id: ObjectId(id)})
        return producto    
    }

    findProductos = async ()  => {
        if(!CnxMongoDB.connection) {
            return []
        }
        try {
            let productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
            return productos
        }
        catch {
            return []
        }
    }
    saveProducto = async producto => {
        if(!CnxMongoDB.connection){
            return {}
        }else{
            producto.precio = parseInt(producto.precio)
            await CnxMongoDB.db.collection('productos').insertOne(producto)
            //var respuesta = {status:'ok'}
            return (producto)
        } 
   }
 
}
export default ProductosMongoDAO
