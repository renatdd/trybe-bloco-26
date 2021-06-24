const express = require('express');
// const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const app = express();

/*
Atividade 3:
Rotas: /posts/:id e /posts

Objetivo: Deve receber uma requisição com o param id e verificar
a existência do post com aquele id . Caso exista, retorne os dados
daquele post. Caso não exista, retorne um status de erro com a 
mensagem id not found. . A rota /posts deve trazer todos os posts cadastrados.

Atividade 4:
Rota: /user/:name
Objetivo: Deve validar se o usuário existe e, caso exista, deve retornar os 
comentários feitos por ele. Caso não exista, deve retornar um status de erro
com uma mensagem user not found.. 
*/

app.get('/posts/:id', middlewares.getPostById);
app.get('/posts', middlewares.getAllPosts);
app.get('/user/:name', middlewares.getUserByName);
app.use((err, req, res, next) => {
  return res.status(404).send({ message: err.message });
});

app.listen(3000, () => {
  console.log('Estamos aqui!');
});
