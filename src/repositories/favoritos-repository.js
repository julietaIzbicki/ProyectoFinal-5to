import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client } = pkg;

export default class FavsRepository {
    // Método para crear un nuevo favorito
    createAsync = async (idUsuario, idOfrecido) => {
        let result = 0;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `CALL Likear($1, $2, $3);`;  // Llamada a procedimiento almacenado
            const values = [idUsuario, idOfrecido, result];
            result = await client.query(sql, values);
        } catch (error) {
            console.error("Error en el repositorio:", error);
        } finally {
            await client.end();
        }
        return result.rows[0].resultado;
    }

    // Método para obtener los favoritos de un usuario
    getFavoritosAsync = async (idUsuario) => {
        const client = new Client(DBConfig);
        let resultado;
        try {
            await client.connect();
            const sql = `
                SELECT 
                    public."Ofrecidos"."id",
                    public."Ofrecidos"."idProveedor",
                    public."Ofrecidos"."titulo",
                    public."Ofrecidos"."descripcion",
                    public."Ofrecidos"."precio",
                    public."FotosOfrecidos"."foto",  -- Corregido: Se debe utilizar un solo par de comillas dobles.
                    COALESCE(AVG(public."Historial"."calificacionProveedor"), 0) AS promedio_calificacion  -- Corregido: Se agrega el alias de tabla adecuado
                FROM 
                    public."Ofrecidos" 
                LEFT JOIN 
                    public."FotosOfrecidos" ON public."FotosOfrecidos"."idOfrecido" = public."Ofrecidos"."id"
                LEFT JOIN 
                    public."Historial" ON public."Historial"."idProveedor" = public."Ofrecidos"."idProveedor"
                INNER JOIN 
                    public."Favoritos" ON public."Favoritos"."idOfrecido" = public."Ofrecidos"."id"
                WHERE 
                    public."Favoritos"."idUsuario" = $1
                GROUP BY 
                    public."Ofrecidos"."id", 
                    public."Ofrecidos"."idProveedor", 
                    public."Ofrecidos"."titulo", 
                    public."Ofrecidos"."descripcion", 
                    public."Ofrecidos"."precio", 
                    public."FotosOfrecidos"."foto";  -- Corregido: Se debe utilizar un solo par de comillas dobles.
            `;
            const values = [idUsuario];
            const res = await client.query(sql, values);
            resultado = res.rows;  // Almacena el resultado de la consulta
        } catch (error) {
            console.error("Error al obtener favoritos:", error);
            throw error;  // Lanza el error para que lo maneje la capa superior
        } finally {
            await client.end();  // Cierra la conexión al final
        }
        return resultado;  // Devuelve los resultados obtenidos
    }
}