import climas from "../models/Clima.js";
import axios from "axios";
import  response  from "express";
import { key } from "../../key.js";

class climaController {
    static listarClimaPesquisados = (req, res) => {
        climas.find()
            .exec((error, climas) => {
                res.status(200).json(climas);
            });
    }
}

async function cadastrarClima(req, res) {
    let clima = new climas(req.body);
    const cidade = req.params.cidade;
    const informacoes = await buscarInformacoes(cidade);
    clima.cidade = cidade;
    clima.temperaturaAtual = informacoes.temp;
    clima.descricaoClima = informacoes.description;
    clima.dataPrevisao = informacoes.date;
    clima.diaSemana = informacoes.forecast[0].weekday;
    clima.temperaturaMaxima = informacoes.forecast[0].max;
    clima.temperaturaMinima = informacoes.forecast[0].min;
    clima.save((err) => {
        if(err) {
            res.status(500).send({message: `${err.message} - Falha ao cadastrar o livro`});
        } else {
            res.status(201).send(clima.toJSON());
        }
    });

}

async function buscarInformacoes(cidade) {
    return await axios.get('https://api.hgbrasil.com/weather?', {
        params: {
            key: key,
            city_name: cidade,
            format: 'json'
        }
    }).then(response => response.data.results);
}

export {climaController, cadastrarClima};