const Aluno = require("../models/Aluno")

const AlunoController = {
    getAll: async (req, res) => {
        res.json(await Aluno.find())
    },

    getAprovados: async (req, res) => {
        res.json(await Aluno.find({media: {$gte: 7}}))
    },

    getReprovados: async (req, res) => {
        res.json(await Aluno.find({media: {$lt: 5}}))
    },

    getRecuperacao: async (req, res) => {
        res.json(await Aluno.find({media: {$gte:5, $lt:7}}))
    },

    create: async (req, res) => {
        try {
            let soma = 0
            const notas = req.body.notas
            const alunos = req.body

            for (let n of notas) {
                soma += n
            }
            const media = soma / notas.length
            alunos.media = media

            res.json(await Aluno.create(req.body))
        } catch (error) {
            res.status(404).json(error.message)
        }
    },

    get: async (req, res) => {
        try {
            res.json(await Aluno.findById(req.params.id))
        } catch (error) {
            res.status(404).json(error.message)
        }
    },

    update: async (req, res) => {
        try {
            res.json(await Aluno.updateMany({turma: "E"}, {turma: "B"}))
        } catch (error) {
            res.status(404).json(error.message)
        }
    },

    delete: async (req, res) => {
        try {
            res.json(await Aluno.deleteMany({nome: "Teste"}))
        } catch (error) {
            res.status(404).json(error.message)
        }
    },
}

module.exports = AlunoController