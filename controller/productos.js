import ApiProductos from '../api/productos.js'


class ControladorProductos {

    constructor() {
        this.apiProductos = new ApiProductos()
    }

    getProductos = async (req,res) => {
        const { id } = req.params
        res.json(await this.apiProductos.obtenerProductos(id))
    }

    postProducto = async (req,res) => {
        const producto = req.body
        res.json(await this.apiProductos.guardarProducto(producto))
    }
    
    calcularProductos = async (req,res) => {
        try {
            let promedioYCantidad = await this.apiProductos.obtenerPromedioYCantidad()
            res.json({promedioYCantidad})
        }
        catch(error) {
            console.log(error)
        }
    }
    getEstadisticas = async (req,res) => {
        try {
            let estadisticas = await this.apiProductos.obtenerEstadisticas()
            res.json({estadisticas})
        }
        catch(error) {
            console.log(error)
        }
    }
}
export default ControladorProductos