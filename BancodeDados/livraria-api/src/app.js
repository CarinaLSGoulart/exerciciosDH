const express = require('express');
const path = require('path');

const app = express();
const livroRouter = require('./routes/livroRoutes')


app.use(express.json());
app.use('/livro', livroRouter);


app.use(function (err, req, res, next){

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.stauts || 500);
    res.json(err);
});

app.listen('3001', () => console.log('Servidor rodando na porta 3001'))

module.exports = app;