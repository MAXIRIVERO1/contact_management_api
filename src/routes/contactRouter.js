const { contactPostController } = require("../controllers/contactController.js");
const { contactGetAllController } = require("../controllers/contactController.js");
const { contactGetByIdController } = require("../controllers/contactController.js");
const { contactUpdateController } = require("../controllers/contactController.js");
const { contactDeleteController } = require("../controllers/contactController.js");

const contactRouter = require("express").Router();

contactRouter.post("/create", contactPostController);
contactRouter.get("/getAll", contactGetAllController);
contactRouter.get("/:id", contactGetByIdController);
contactRouter.put("/update/:id", contactUpdateController);
contactRouter.delete("/delete/:id", contactDeleteController);


module.exports = {
    contactRouter
}