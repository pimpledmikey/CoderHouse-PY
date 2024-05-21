import express from "express";
import apiRoutes from "./routes/index.routes.js";
//import viewRoutes from "./routes/views.routes.js";
//import handlebars from "express-handlebars";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static("public"));


// Rutas
app.use("/",apiRoutes );

// Use viewRoutes
//app.use(viewRoutes);

/*
// Set up Handlebars
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
*/

app.listen(PORT, () => {
    console.log(`Entro a servidor con el puerto ${PORT}`);
});