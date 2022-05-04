import mongoose from "mongoose";

const climaSchema = new mongoose.Schema(
    {
        id: {type: String},
        cidade: {type: String, required: true},
        temperaturaAtual: {type: Number},
        descricaoClima: {type: String},
        dataPrevisao: {type: String},
        diaSemana: {type: String},
        temperaturaMaxima: {type: Number},
        temperaturaMinima: {type: Number}
    }
);

const climas = mongoose.model('climas', climaSchema);

export default climas;