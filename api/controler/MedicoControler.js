const medico = require('../model/MedicoSchema');

class MedicoControler {    

    async cadastrar(req, res){
        try {
            var result = await medico.findOne({
                "crm": req.body.crm
            });
            if(result){
                res.status(200).json({
                    'mensagem': 'crm já cadastrado'
                });
            }else{
                var result = await medico.create(req.body);
                res.status(201).json(result);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
     
        async buscar(req, res){
            var result = await medico.findOne({
                "crm": req.params.crm
            });
            if(result){
                res.status(200).json(result);
            }else{
                res.status(200).json({
                    'mensagem': 'Medico não encontrado'
                });
            }
        }
    
        async listar(req, res){
            var result = await medico.find({});
            res.status(200).json(result);
        }
    }

module.exports = new MedicoControler();