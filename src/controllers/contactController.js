const { contactGetAllHandler } = require("../handlers/contactHandler.js");
const { contactPostHandler } = require("../handlers/contactHandler.js");
const { contactGetByIdHandler } = require("../handlers/contactHandler.js");
const { contactUpdateHandler } = require("../handlers/contactHandler.js");
const { contactDeleteHandler } = require("../handlers/contactHandler.js");



const contactPostController = async(req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const created = await contactPostHandler({ name, email, phone, address });
        return res.status(200).json(created);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const contactGetAllController = async(req, res) => {
    try {
        const found = await contactGetAllHandler();
        return res.status(200).json(found)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const contactGetByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const found = await contactGetByIdHandler(id)
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const contactUpdateController = async(req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, address } = req.body;
        const updated = await contactUpdateHandler(id, name, email, phone, address)
        return res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const contactDeleteController = async(req, res) => {
    try {
        const { id } = req.params;
        const response = await contactDeleteHandler(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

module.exports = {
    contactPostController,
    contactGetAllController,
    contactGetByIdController,
    contactUpdateController,
    contactDeleteController
}