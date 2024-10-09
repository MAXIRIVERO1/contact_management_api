const { Contact } = require("../db/db.js");


const contactPostHandler = async(obj) => {
    const created = await Contact.create(obj);
    return created;
};

const contactGetAllHandler = async() => {
    const found = await Contact.findAll();
    return found;
};

const contactGetByIdHandler = async(id) => {
    const found = await Contact.findByPk(id);
    return found;
};

const contactUpdateHandler = async(id, name, email, phone, address) => {
        const found = await Contact.findByPk(id);
        if(!found){
            return {
                success: false,
                message: "Contact not found"
            }
        }else{
            const updated = await found.update({name, email, phone, address});
            return updated;
        }
};

const contactDeleteHandler = async(id) => {
    const found = await Contact.findByPk(id);
    if(!found){
        return {
            success: false,
            message: "Contact not found"
        }
    }else{
        found.destroy();
        return "Deletion complete"
    }
};

module.exports = {
    contactPostHandler,
    contactGetAllHandler,
    contactGetByIdHandler,
    contactUpdateHandler,
    contactDeleteHandler
};