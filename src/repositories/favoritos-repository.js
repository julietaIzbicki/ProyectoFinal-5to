import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class FavsRepository {
    createAsync = async (idUsuario, idOfrecido) => {
        let result = 0;
        console.log(idUsuario, idOfrecido)
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `CALL Likear($1, $2, $3); `;
            const values = [idUsuario, idOfrecido, result];
            result = await client.query(sql, values);  
        } catch (error) {
            console.error("Error en el repositorio:", error);
        } finally {
            await client.end(); 
        }
        return result.rows[0].resultado;  
    }
}
