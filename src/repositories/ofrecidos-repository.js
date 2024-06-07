import DBConfig from '../configs/db-config.js';
import pkg from 'pg'
const { Client, Pool }  = pkg;

export default class OfrecidosRepository {
    getByFilter = async (entity) => {
        let returnEntity = null;
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const sql = `SELECT * FROM public."Usuarios" WHERE public."Usuarios".email LIKE $1 AND public."Usuarios".contrasena LIKE $2`;
            const values = [
                entity?.email  ??'',
                entity?.contrasena  ??''
            ];
            const result = await client.query(sql, values);
            await client.end();
            if (result.rows.length > 0){
                returnEntity = result.rows[0];
            }
            
        } catch (error) {
            console.log(error);
            returnEntity = false;
        }
        return returnEntity;
    }
}