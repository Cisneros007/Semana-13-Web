const db = require("../models");
const Libro = db.Libro;
const Autor = db.Autor; // Asumiendo que el modelo de autores se llama 'Autor'
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Libro
exports.create = (req, res) => {
  // Validar la solicitud
  if (!req.body.titulo) {
    res.status(400).send({
      message: "¡El título del libro no puede estar vacío!"
    });
    return;
  }

  // Crear un Libro
  const libro = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    publicado: req.body.publicado,
    autorId: req.body.autorId
  };

  // Guardar Libro en la base de datos
  Libro.create(libro)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Se ha producido un error al crear el Libro."
      });
    });
};

// Obtener todos los Libros desde la base de datos
exports.findAll = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.status(200).send(libros);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occurred while retrieving libros.'
    });
  }
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Libro.findByPk(id, {
    include: [{ model: Autor, as: "autor" }] 
  })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No se encontró el Libro con id=${id}.`
        });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al recuperar el Libro con id=${id}`
      });
    });
};

// Actualizar un Libro por su id
exports.update = (req, res) => {
  const id = req.params.id;

  Libro.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡Libro actualizado correctamente!"
        });
      } else {
        res.send({
          message: `No se puede actualizar el Libro con id=${id}. ¡Quizás el Libro no fue encontrado o req.body está vacío!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al actualizar el Libro con id=${id}`
      });
    });
};

// Eliminar un Libro por su id
exports.delete = (req, res) => {
  const id = req.params.id;

  Libro.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡Libro eliminado correctamente!"
        });
      } else {
        res.send({
          message: `No se puede eliminar el Libro con id=${id}. ¡Quizás el Libro no fue encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al eliminar el Libro con id=${id}`
      });
    });
};

// Eliminar todos los Libros
exports.deleteAll = (req, res) => {
  Libro.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Libros fueron eliminados correctamente!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Se ha producido un error al eliminar todos los Libros."
      });
    });
};

// Obtener todos los Libros publicados
exports.findAllPublished = (req, res) => {
  Libro.findAll({ where: { publicado: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Se ha producido un error al recuperar los Libros publicados."
      });
    });
};
