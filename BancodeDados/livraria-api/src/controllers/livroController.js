const db = require('../database/models');
const Livro = db.Livro;

const livroController = {
    list: (req, res) => {
        Livro.findAll()
        .then(livros => {
            res.status(200).json(livros)
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
}

module.exports = livroController;