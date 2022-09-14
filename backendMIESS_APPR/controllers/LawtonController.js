const Lawton = require("../models/Lawton");


exports.enviarTest = async (req, res) => {

    try {
        let testLawton;

        testLawton = new Lawton(req.body);

        await testLawton.save();
        res.send(testLawton);



    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTest = async (req, res) => {
    const {id} = req.params;
    console.log('id: ' + id);
    try {
        const lawton = await Lawton.findById(id);
        res.json(lawton);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTestByIdEnc = async (req, res) => {
    const {id} = req.params;
    console.log('id: ' + id);
    try {
        const lawton = await Lawton.find({"idEncabezado":id});
        res.json(lawton);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}