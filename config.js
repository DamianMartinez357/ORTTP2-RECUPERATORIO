import dotenv from 'dotenv'

dotenv.config()

const PORT = 8081
const STRCON = process.env.STRCON
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'DESA'   // DESA - PROD
const BASE = process.env.BASE

export default {
    PORT,
    STRCON,
    MODO_PERSISTENCIA,
    BASE
}