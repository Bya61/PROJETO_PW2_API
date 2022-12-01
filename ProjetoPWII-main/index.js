//IMPORTANDO PACOTE EXPRESS
const express = require('express');

//IMPORTANDO ARQUIVO DE ROTAS CLIENTE
const routesProduto = require('./route/routesProduto');

//CRIANDO EXECUTÁVEL DO EXPRESS ATRAVÉS DE APP
const app = express();

app.use(express.json());

//UTILIZANDO ROUTES.JS CRIADO
app.use('/', routesProduto);

/*TESTE DE ROTA RAIZ 
app.get('/', function (req, res) {
    res.send('RESPOSTA DA ROTA RAIZ DA APLICAÇÃO');
});*/

//CRIANDO WEB SERVER E DEFINIDO PORTA LÓGICA(OBRIGATÓRIA) E CALLBACK(OPCIONAL)
app.listen(3000, () => {
    console.log('RODANDO O SERVIDOR VIA - http://localhost:3000');
});