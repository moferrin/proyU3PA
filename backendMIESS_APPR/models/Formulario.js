var mongoose = require('mongoose');

var FormularioSchema = new mongoose.Schema({
  id: String,
  imageUrl: String,
  pregunta1: String,
  pregunta2: String,
  ubicacion:String,
  am_id:String,
  tec_id:String,
  uploaded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Formulario_Encabezados', FormularioSchema);