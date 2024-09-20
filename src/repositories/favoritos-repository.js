import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client } = pkg;

export default class FavsRepository {
    createAsync = async (idUsuario, idOfrecido) => {
        let result = 0;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `CALL Likear($1, $2, $3);`;
            const values = [idUsuario, idOfrecido, result];
            result = await client.query(sql, values);
        } catch (error) {
            console.error("Error en el repositorio:", error);
        } finally {
            await client.end();
        }
        return result.rows[0].resultado;
    }

    getFavoritosAsync = async (idUsuario) => {
        const client = new Client(DBConfig);
        let resultado;
        try {
            await client.connect();
            const sql = `
                SELECT 
                    o."id",
                    o."idusuario",
                    o."titulo",
                    o."descripcion",
                    o."precio",
                    f."foto",
                    COALESCE(AVG(h."calificacionProveedor"), 0) AS promedio_calificacion
                FROM 
                    public."Ofrecidos" o
                LEFT JOIN 
                    public."FotosOfrecidos" f ON f."idOfrecido" = o."id"
                LEFT JOIN 
                    public."Historial" h ON h."idProveedor" = o."idusuario"
                INNER JOIN 
                    public."Favoritos" fav ON fav."idOfrecido" = o."id"
                WHERE 
                    fav."idUsuario" = $1
                GROUP BY 
                    o."id", o."idusuario", o."titulo", o."descripcion", o."precio", f."foto";
            `;
            const values = [idUsuario];
            const res = await client.query(sql, values);
            resultado = res.rows; 
        } catch (error) {
            console.error("Error al obtener favoritos:", error);
            throw error;
        } finally {
            await client.end();
        }
        return resultado;
    }
}    