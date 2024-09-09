import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
const { Client } = pkg;

export default class HistorialRepository {
    createAsync = async (entity) => {
        let resultado = 0;
        const client = new Client(DBConfig);

        try {
            await client.connect();
            
            // Llamar al procedimiento almacenado
            const sql = `
                CALL public."Reserva"($1, $2, $3, $4, $5, $6);
            `;
            const values = [
                entity.idPublicacion ?? 0,
                entity.idProveedor ?? 0,
                entity.idContratador ?? 0,
                entity.fechaReservada ?? null,  // Enviar null si la fecha es opcional
                entity.idEstado ?? 0,
                resultado  // Este valor se usará para capturar el resultado del procedimiento
            ];
            
            // Ejecutar la consulta
            const result = await client.query(sql, values);
            
            // Extraer el resultado del procedimiento almacenado
            resultado = result.rows[0]?.resultado ?? 0;
            console.log('Resultado del procedimiento:', resultado);
            
        } catch (error) {
            console.error('Error al llamar al procedimiento almacenado:', error);
        } finally {
            await client.end();
        }

        return resultado;
    }
}