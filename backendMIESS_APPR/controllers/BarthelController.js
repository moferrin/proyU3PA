const Barthel = require("../models/Barthel");
const TestBarthel = require("../models/Barthel");


exports.enviarTest = async (req, res) => {

    try {
        let testBarthel;

        // Creamos nuestro TestBarthel
        testBarthel = new TestBarthel(req.body);

        await testBarthel.save();
        res.send(testBarthel);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTest = async (req, res) => {
    const {id} = req.params;
    console.log('id: ' + id);
    try {
        const barthel = await Barthel.findById(id);
        res.json(barthel);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTestByIdEnc = async (req, res) => {
    const {id} = req.params;
    console.log('id: ' + id);
    try {
        const barthel = await Barthel.find({"idEncabezado":id});
        res.json(barthel);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}