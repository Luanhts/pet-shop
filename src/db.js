const mongoose = require("mongoose");

const db = "mongodb+srv://luanh:<db_password>@cluster0.jeivl.mongodb.net/petshop"

async function connect() {
    await mongoose.connect(db);
}

connect()

.then(() => console.log("Conectou!!!"))

.catch((err) => console.log(err))

module.exports = mongoose
