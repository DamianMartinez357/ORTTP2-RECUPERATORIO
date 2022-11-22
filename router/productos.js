import express from 'express'
import ControladorProductos from '../controller/productos.js'


export class RouterProductos {
    constructor() {
        this.router = express.Router()
        this.controladorProductos = new ControladorProductos()
    }

    start() {
        this.router.get('/listar', this.controladorProductos.getProductos)
        this.router.get('/estadistica', this.controladorProductos.getEstadisticas)
        this.router.post('/ingreso', this.controladorProductos.postProducto)
        //this.router.get('/calculo',this.controladorProductos.calcularProductos)
        return this.router
    }
}
