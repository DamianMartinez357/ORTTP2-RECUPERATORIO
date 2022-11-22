class ProductosMemDAO {

    constructor() {
        this.productos = [
            { id: '1', nombre: 'TV', precio: 100, descripcion:'tv 32', url:'www.google.com.ar' },
            { id: '2', nombre: 'Heladera',  precio: 200, descripcion:'heladera no frost', url:'www.google.com.br' },
        ]
    }

    findProductos = async ()  => {
        try {
            return this.productos
        }
        catch {
            return []
        }
    }

    saveProducto = async producto => {
        const id = parseInt(this.productos[this.productos.length-1].id) + 1
        producto.id = String(id)
        this.productos.push(producto)
        return producto  
    }
    
}

export default ProductosMemDAO
