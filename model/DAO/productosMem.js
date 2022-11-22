class ProductosMemDAO {

    constructor() {
        this.productos = [
            { id: '1', producto: 10, nombre: 'Juan', apellido: 'Perez', curso:'22D' },
            { id: '2', producto: 8, nombre: 'Jose', apellido: 'Gimenez', curso:'21D' },
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
