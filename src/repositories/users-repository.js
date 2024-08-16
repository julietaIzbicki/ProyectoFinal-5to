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
            const sql = `CALL Registrarse($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
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
        console.log(resultado.rows[0].resultado)
        return resultado.rows[0].resultado;
    }

/*
    savePasswordResetCode = async (email, code, expirationMillis) => {
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const expirationDate = new Date(expirationMillis);
            const formattedDate = expirationDate.toISOString(); 

            const sql = `INSERT INTO public.passwordresetcodes (email, code, expiration) 
                         VALUES ($1, $2, $3) 
                         ON CONFLICT (email) 
                         DO UPDATE SET code = $2, expiration = $3`;
            const values = [email, code, formattedDate];
            await client.query(sql, values);
        } catch (error) {
            console.log('Error al guardar el código de reinicio de contraseña:', error);
        } finally {
            await client.end();
        }
    }

    getPasswordResetCode = async (email) => {
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const sql = `SELECT * FROM public.passwordresetcodes WHERE email = $1`;
            const result = await client.query(sql, [email]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
        } finally {
            await client.end();
        }
    }

    deletePasswordResetCode = async (email) => {
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const sql = `DELETE FROM public.passwordresetcodes WHERE email = $1`;
            await client.query(sql, [email]);
        } catch (error) {
            console.log(error);
        } finally {
            await client.end();
        }
    }

    updatePassword = async (email, newPassword) => {
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const sql = `UPDATE public."Usuarios" SET contrasena = $1 WHERE email = $2`;
            await client.query(sql, [newPassword, email]);
        } catch (error) {
            console.log(error);
        } finally {
            await client.end();
        }
    }
*/
}