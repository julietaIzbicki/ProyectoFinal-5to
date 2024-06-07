import express from "express";  
import cors from "cors"; 
import RouterUser from "./src/controllers/users-controller.js"
import RouterOfrecimientos from "./src/controllers/ofrecidos-controller.js"

const app = express(); 
const port = 3000; 

app.use(cors()); 
app.use(express.json());
app.use("/api/users", RouterUser);
app.use("/api/Ofrecimientos", RouterOfrecimientos);

app.listen(port,() => { 
    console.log(`Example app listening on port ${port}`) 
})