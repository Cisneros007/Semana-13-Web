module.exports = (sequelize, Sequelize) => {
  const Libro = sequelize.define("libro", {
    titulo: {
      type: Sequelize.STRING
    },
    descripcion: {
      type: Sequelize.STRING
    },
    publicado: {
      type: Sequelize.BOOLEAN
    },
    autorId: {
      type: Sequelize.INTEGER
    }
  });

  return Libro;
};
