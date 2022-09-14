const Minimental = require("../models/MiniMental");


exports.enviarTest = async (req, res) => {

    try {
        let minimental;

        // Creamos nuestro minimental
        minimental = new Minimental(req.body);

        await minimental.save();
        res.send(minimental);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTest = async (req, res) => {

    try {
        const minimental = await Minimental.find();
        res.json(minimental);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}