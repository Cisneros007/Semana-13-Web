const db = require("../models");
const Autor = db.Autor; 
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo Autor
exports.create = (req, res) => {
  // Validar la solicitud
  if (!req.body.nombre || !req.body.apellido) {
    res.status(400).send({
      message: "El contenido no puede estar vacío!"
    });
    return;
  }

  // Crear un Autor
  const autor = {
    nombre: req.body.nombre,
    apellido: req.body.apellido
  };

  // Guardar Autor en la base de datos
  Autor.create(autor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrió un error al crear el Autor."
      });
    });
};

// Retrieve all Autores from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Autor.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se ha producido un error al recuperar los autores."
      });
    });
};

// Find a single Autor with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Autor.findByPk(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No se encontró el Autor con id=${id}`
        });
      } else {
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al recuperar el Autor con id=${id}`
      });
    });
};

// Update an Autor by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Autor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Autor actualizado correctamente."
        });
      } else {
        res.send({
          message: `No se puede actualizar el Autor con id=${id}. Tal vez el Autor no fue encontrado o req.body está vacío!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al actualizar el Autor con id=${id}`
      });
    });
};

// Delete an Autor with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Autor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Autor eliminado correctamente!"
        });
      } else {
        res.send({
          message: `No se puede eliminar el Autor con id=${id}. Tal vez el Autor no fue encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al eliminar el Autor con id=${id}`
      });
    });
};

// Delete all Autores from the database.
exports.deleteAll = (req, res) => {
  Autor.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Autores fueron eliminados correctamente!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se ha producido un error al eliminar todos los Autores."
      });
    });
};
