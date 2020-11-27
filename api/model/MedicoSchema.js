const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const medico = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "O campo nome é obrigatório"],
  },
  crm: {
    type: String,
    unique: true,
    required: [true, "O campo crm é obrigatório"],
  },

  especialidade: {
    type: String,
    required: [true, "O campo especialidade é obrigatório"],
  },

  criadoEm: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model("Medico", medico);