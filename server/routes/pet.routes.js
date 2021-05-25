const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.get("/api/pets", PetController.index);
    app.post("/api/pets", PetController.create);
    app.get("/api/pets/:id", PetController.show);
    app.put("/api/pets/:id", PetController.update);
    app.delete("/api/pets/:id", PetController.destroy);
};