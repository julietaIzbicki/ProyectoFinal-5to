import DBConfig from "../configs/db-config.js";
import pkg from "pg";
const { Client } = pkg;

export default class HistorialRepository {
  createAsync = async (entity) => {
    let resultado = 0;
    const client = new Client(DBConfig);

    try {
      await client.connect();
      const sql = 'CALL public."reserva"($1, $2, $3, $4, $5, $6);';
      const values = [
          entity.idPublicacion ?? 0,
          entity.idOffer ?? 0,
          entity.idContratador ?? 0,
          entity.fechaReservada ?? null,
          entity.idEstado ?? 0,
          resultado, 
      ];
      
      const result = await client.query(sql, values);
      resultado = result.rows[0]?.resultado ?? 0;
      console.log("Resultado del procedimiento:", resultado);
    } catch (error) {
      console.error("Error al llamar al procedimiento almacenado:", error);
    } finally {
      await client.end();
    }
    return resultado;
  };

  postResena = async (entity) => {
    let resultado = 0;
    const client = new Client(DBConfig);
    try {
        await client.connect();
        const sql = `CALL public."Resena"($1, $2, $3, $4);`;
      const values = [
        entity.idPublicacion ?? 0,
        entity.comentario ?? '',
        entity.tipo ??'',
        resultado,
      ];
      const result = await client.query(sql, values);
      resultado = result.rows[0]?.resultado ?? 0;
    } catch (error) {
      console.error("Error al llamar al procedimiento almacenado:", error);
    } finally {
      await client.end();
    }
    return resultado;
  }; 
  
  getByFecha = async (fecha) => {
    const client = new Client(DBConfig);
    let historiales = [];
    try {
      await client.connect();
      const sql = `
        SELECT * FROM public."Historial"
        WHERE "fechaReservada" = $1;
      `;
      const values = [fecha];
      const result = await client.query(sql, values);
      historiales = result.rows;
    } catch (error) {
      console.error('Error al consultar el historial por fecha:', error);
    } finally {
      await client.end();
    }
    return historiales;
  };
  
}
 

