const mongoose = require("mongoose");

const URI = "mongodb+srv://Jachila1:joselin2000@proyectoprogramacionava.v27ea.mongodb.net/ProyectoProgramacionAvanzada";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;