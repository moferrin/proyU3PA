const Supervisor = require("../models/supervisor.model.js");

const supervisorCtrl = {};

supervisorCtrl.getSupervisors = async (req, res, next) => {
  const supervisors = await Supervisor.find();
  res.json(supervisors);
};

supervisorCtrl.createSupervisor = async (req, res, next) => {
  const supervisor = new Supervisor({
    sup_nombre: req.body.sup_nombre,
    sup_apellido: req.body.sup_apellido,
    sup_cedula:req.body.sup_cedula,
    sup_contrasenia: req.body.sup_contrasenia,
  });
  await supervisor.save();
  res.json({ status: "supervisor_c" });
};

supervisorCtrl.getLogin = async (req, res, next) => {
  const {sup_cedula, sup_contrasenia} = req.body;
  const usuario = await Supervisor.find({sup_cedula,sup_contrasenia});
  if (!usuario[0]) return res.status(401).send('Login incorrecto');
  res.json(usuario);
}

supervisorCtrl.getSupervisor = async (req, res, next) => {
  const { id } = req.params;
  const supervisor = await Supervisor.findById(id);
  res.json(supervisor);
};

supervisorCtrl.editSupervisor = async (req, res, next) => {
  const { id } = req.params;
  await Supervisor.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "supervisor Updated" });
};

supervisorCtrl.deleteSupervisor = async (req, res, next) => {
  await Supervisor.findByIdAndRemove(req.params.id);
  res.json({ status: "supervisor Deleted" });
};

module.exports = supervisorCtrl;
