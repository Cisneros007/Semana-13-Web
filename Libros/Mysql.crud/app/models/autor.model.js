module.exports = (sequelize, Sequelize) => {
  const Autor = sequelize.define("autor", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Autor;
};
