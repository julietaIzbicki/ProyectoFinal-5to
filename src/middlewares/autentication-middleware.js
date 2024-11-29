import { response } from 'express';
import Jwt from 'jsonwebtoken';

class AutenticationMiddleware {
    AuthMiddleware = async (req, res, next) => {
        try {
            if (req.headers.authorization) {
                let authorizationHeader = req.headers.authorization; 
                let token = authorizationHeader.replace("Bearer ", "");
                const claveSecreta = "MaiuJuli_0607";
                let original = await Jwt.verify(token, claveSecreta);
                req.id_user = original.id;
                req.email = original.email;
                next();
            } else {
                return res.status(401).send("Token no proporcionado");
            }
        } catch (error) {
            console.log(error);
            return res.status(401).send("Unauthorized");
        }
    }
}

export default new AutenticationMiddleware();




/*
error: el valor es demasiado largo para el tipo character varying(15)
    at C:\Nueva carpeta\ProyectoFinal-Back-5to\node_modules\pg\lib\client.js:526:17
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async UsersRepository.createAsync (file:///C:/Nueva%20carpeta/ProyectoFinal-Back-5to/src/repositories/users-repository.js:46:25)
    at async UsersService.createAsync (file:///C:/Nueva%20carpeta/ProyectoFinal-Back-5to/src/services/users-service.js:14:22)
    at async file:///C:/Nueva%20carpeta/ProyectoFinal-Back-5to/src/controllers/users-controller.js:53:27 {
  length: 759,
  severity: 'ERROR',
  code: '22001',
  detail: undefined,
  hint: undefined,
  position: undefined,
  internalPosition: undefined,
  internalQuery: undefined,
  where: 'sentencia SQL: «INSERT INTO public."Usuarios"(\n' +
    '            email, \n' +
    '            nombre, \n' +
    '            apellido, \n' +
    '            direccion, \n' +
    '            contrasena, \n' +
    '            "idGenero", \n' +
    '            foto, \n' +
    '            "FechaNacimiento"\n' +
    '        ) VALUES (\n' +
    '            p_email,\n' +
    '            p_nombre,\n' +
    '            p_apellido,\n' +
    '            p_direccion,\n' +
    '            p_contrasena,\n' +
    '            p_idGenero,\n' +
    '            p_foto,\n' +
    '            p_fechaNacimiento\n' +
    '        )»\n' +
    'función PL/pgSQL registrarse(character varying,character varying,character varying,character varying,character varying,integer,character varying,date) en la línea 10 en sentencia SQL',     
  schema: undefined,
  table: undefined,
  column: undefined,
  line: '641',
  routine: 'varchar'
}
Error al crear usuario: TypeError: Cannot read properties of undefined (reading '0')
    at UsersRepository.createAsync (file:///C:/Nueva%20carpeta/ProyectoFinal-Back-5to/src/repositories/users-repository.js:50:30)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async UsersService.createAsync (file:///C:/Nueva%20carpeta/ProyectoFinal-Back-5to/src/services/users-service.js:14:22)
    at async file:///C:/Nueva%20carpeta/ProyectoFinal-Back-5to/src/controllers/users-controller.js:53:27


*/