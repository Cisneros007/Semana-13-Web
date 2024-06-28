module.exports = app => {
    const autores = require("../controllers/autor.controller.js");

    var router = require("express").Router();

    // Create a new Autor
    router.post("/", autores.create);

    // Retrieve all Autores
    router.get("/", autores.findAll);

    // Retrieve a single Autor with id
    router.get("/:id", autores.findOne);

    // Update a Autor with id
    router.put("/:id", autores.update);

    // Delete a Autor with id
    router.delete("/:id", autores.delete);

    // Delete all Autores
    router.delete("/", autores.deleteAll);

    app.use('/api/autores', router);
};
