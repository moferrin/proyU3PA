const Tecnico = require("../models/tecnico.model");

const tecnicoCtrl = {};

tecnicoCtrl.getTecnicos = async (req, res, next) => {
  const tecnicos = await Tecnico.find();
  res.json(tecnicos);
};

tecnicoCtrl.createTecnico = async (req, res, next) => {
  const tecnico = new Tecnico({
    tec_id: req.body.tec_id,
    sup_id:req.body.sup_id,
    tec_nombre: req.body.tec_nombre,
    tec_apellido: req.body.tec_apellido,
    tec_cedula:req.body.tec_cedula,
    tec_telefono:req.body.tec_telefono,
    tec_correo: req.body.tec_correo,
    tec_direccion:req.body.tec_direccion,
    tec_contrasenia: req.body.tec_contrasenia,
  });
  await tecnico.save();
  res.json({ status: "tecnico_c" });
};

tecnicoCtrl.getTecnicoBySup = async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  const tecnico = await Tecnico.find({"sup_id":id});
  res.json(tecnico);
};

tecnicoCtrl.getLogin = async (req, res, next) => {
  const {tec_cedula, tec_contrasenia} = req.body;
  const usuario = await Tecnico.find({tec_cedula,tec_contrasenia});
  if (!usuario[0]) return res.status(401).send('Login incorrecto');
  res.json(usuario);
}

tecnicoCtrl.getTecnico = async (req, res, next) => {
  const { id } = req.params;
  const tecnico = await Tecnico.findById(id);
  res.json(tecnico);
};

tecnicoCtrl.editTecnico = async (req, res, next) => {
  const { id } = req.params;
  await Tecnico.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "tecnico Updated" });
};

tecnicoCtrl.deleteTecnico = async (req, res, next) => {
  await Tecnico.findByIdAndRemove(req.params.id);
  res.json({ status: "tecnico Deleted" });
};

module.exports = tecnicoCtrl;
