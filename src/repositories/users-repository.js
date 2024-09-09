import DBConfig from '../configs/db-config.js';
import pkg from 'pg'
const { Client, Pool }  = pkg;

export default class UsersRepository {
    getByUsernameAsync = async (entity) => {
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

    createAsync = async (entity) => {
        let resultado = 0;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `CALL public.registrarse($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
            const values = [
                entity?.email ??'',
                entity?.nombre ??'', 
                entity?.apellido ??'', 
                entity?.direccion ??'', 
                entity?.contrasena ??'', 
                entity?.idGenero ?? 0, 
                entity?.foto ??'', 
                entity?.FechaNacimiento    ??'2000-01-01',
                resultado
            ]
            resultado = await client.query(sql, values);
        } catch (error) {
            console.log(error);
        }
        console.log(resultado.rows[0].p_resultado, "repooo")
        return resultado.rows[0].p_resultado;
    }
}