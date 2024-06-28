const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importar los modelos
db.Autor = require("./autor.model.js")(sequelize, Sequelize);
db.Libro = require("./libro.model.js")(sequelize, Sequelize);

// Definir relaciones
db.Autor.hasMany(db.Libro, { as: "libros", foreignKey: "autorId" });
db.Libro.belongsTo(db.Autor, { foreignKey: "autorId", as: "autor" });

module.exports = db;
