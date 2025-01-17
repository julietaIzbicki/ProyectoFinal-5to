import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class categoriasRepository {
    getCategorias = async () => {
        const client = new Client(DBConfig);
        let returnValue = [];
        let result;
        try {
            await client.connect();
            const sql = `SELECT * FROM public."Categorias"`;
            result = await client.query(sql);  
            returnValue = result.rows;
        } catch (error) {
            console.error("Error en el repositorio:", error);
        } finally {
            await client.end(); 
        }
        return returnValue;  
    }
}
