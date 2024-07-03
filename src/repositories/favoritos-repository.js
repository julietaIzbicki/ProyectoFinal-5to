import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client, Pool } = pkg;

export default class FavsRepository {
    createAsync = async (idUsuario, idOfrecido) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        console.log("IDs recibidos en el repositorio:", idUsuario, idOfrecido);
        try {
            await client.connect();
            const sql = `DO $$
                BEGIN
                    IF EXISTS (SELECT * FROM public."Favoritos" WHERE "idUsuario" = $1 AND "idOfrecido" = $2) THEN
                        DELETE FROM public."Favoritos" WHERE "idUsuario" = $1 AND "idOfrecido" = $2;
                    ELSE
                        INSERT INTO public."Favoritos"("idUsuario", "idOfrecido")
                        VALUES ($1, $2);
                    END IF;
                END $$;`;
            const values = [idUsuario, idOfrecido];
            const result = await client.query(sql, values);  
            returnArray = result.rowCount; 
            console.log("Número de filas afectadas:", returnArray);
        } catch (error) {
            console.error("Error en el repositorio:", error);
        } finally {
            await client.end(); 
        }
        return returnArray;  
    }
}
