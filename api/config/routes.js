const express = require("express");
const router = express.Router();

const medico = require('../controler/MedicoControler');

router.post('/medico/cadastrar', medico.cadastrar);
router.get('/medico/buscar/:crm', medico.buscar);
router.get('/medico/listar', medico.listar);


module.exports = router;