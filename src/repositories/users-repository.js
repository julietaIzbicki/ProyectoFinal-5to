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
        return resultado.rows[0].p_resultado;
    }

    getProfileByTokenAsync = async (email) => {
        let returnEntity = null;
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const sql = `SELECT email, nombre, apellido, direccion, "idGenero", foto, "FechaNacimiento" 
                         FROM public."Usuarios" 
                         WHERE email = $1`;
            const values = [email];
            const result = await client.query(sql, values);
            await client.end();
            if (result.rows.length > 0) {
                returnEntity = result.rows[0];
            }
        } catch (error) {
            console.log(error);
            returnEntity = false;
        }
        return returnEntity;
    }

    getProfileByIdAsync = async (id) => {
        let returnEntity = null;
        const client = new Client(DBConfig);
        await client.connect();
        try {
            const sql = `SELECT email, nombre, apellido, direccion, "idGenero", foto, "FechaNacimiento" 
                         FROM public."Usuarios" 
                         WHERE id = $1`;
            const values = [id];
            const result = await client.query(sql, values);
            await client.end();
            if (result.rows.length > 0) {
                returnEntity = result.rows[0];
            }
        } catch (error) {
            console.log(error);
            returnEntity = false;
        }
        return returnEntity;
    }
    
    updateProfileAsync = async (email, newProfilePictureUrl) => {
        let resultado = 0;
        const client = new Client(DBConfig);
        try {
          await client.connect();
          const sql = `UPDATE public."Usuarios" 
                       SET foto = $1
                       WHERE email = $2`;
          const values = [newProfilePictureUrl, email];
          const result = await client.query(sql, values);
          await client.end();
      
          if (result.rowCount > 0) {
            resultado = 1; // Actualización exitosa
          } else {
            resultado = 0; // No se actualizó el perfil
          }
        } catch (error) {
          console.log('Error al actualizar foto de perfil:', error);
          resultado = -1; // Error al actualizar
        }
        return resultado; 
      };
}