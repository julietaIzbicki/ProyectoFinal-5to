import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client } = pkg;

export default class HistorialRepository {
    createAsync = async (entity) => {
        let resultado = 0;
        const client = new Client(DBConfig);
        console.log('resuu ',resultado);
        try {
            await client.connect();
            const sql = `CALL Reserva($1, $2, $3, $4, $5);`;
            const values = [
                entity?.idPublicacion ?? 0,
                entity?.idProveedor ?? 0,
                entity?.idContratador ?? 0, 
                entity?.fechaReservada ?? '2000-01-01', 
                entity?.idEstado ?? 0,
                resultado
            ];
            const result = await client.query(sql, values);
            resultado = result.rows[0].resultado; 
        } catch (error) {
            console.log(error);
        } finally {
            await client.end(); 
        }
        console.log(resultado);
        return resultado;
    }
}
