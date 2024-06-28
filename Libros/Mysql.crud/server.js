const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:4200", 
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// Sincronizar la base de datos
db.sequelize.sync()
  .then(() => {
    console.log("Sincronización de la base de datos completada.");
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });
  db.sequelize.sync({ force: false }).then(() => {
    console.log("Sincronizado con la base de datos.");
  }).catch((err) => {
    console.log("Fallo al sincronizar la base de datos: " + err.message);
  });

// Ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la aplicación de bezkoder." });
});

require("./app/routes/autor.routes.js")(app);
require("./app/routes/libro.routes.js")(app);

// Establecer puerto, escuchar peticiones
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}.`);
});
