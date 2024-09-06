import express from "express";  
import cors from "cors"; 
import RouterUser from "./src/controllers/users-controller.js"
import RouterOfrecimientos from "./src/controllers/ofrecidos-controller.js"
import RouterFavs from "./src/controllers/favoritos-controller.js";
import RouterCategorias from "./src/controllers/categorias-controller.js";
import RouterHistorial from "./src/controllers/historial-controller.js";


const app = express(); 
const port = 3000; 

app.use(cors()); 
app.use(express.json());
app.use("/api/users", RouterUser);
app.use("/api/Ofrecimientos", RouterOfrecimientos);
app.use("/api/Favoritos", RouterFavs);
app.use("/api/Categorias", RouterCategorias);
app.use("/api/Historial", RouterHistorial);
app.use("/assets", express.static('assets'));


app.listen(port,() => { 
    console.log(`Example app listening on port ${port}`) 
})