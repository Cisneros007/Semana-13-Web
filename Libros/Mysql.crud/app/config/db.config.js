module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "tecsup00",
  DB: "Historias",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
