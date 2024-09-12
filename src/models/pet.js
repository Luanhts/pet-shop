const db = require("../db")

const Schema = db.Schema;

const petSchema = new Schema({
    nome: {
        type: String,
        required: true,
    }
})

const Pet = db.model("Pet", petSchema);

module.exports = Pet;