//importações e declarações
const express = require('express');
const app = express();
const fs = require('fs');
const file = require('./file.json');
port = 3000;
let users = [
    {id: 1, nome : "edivan"},
    {id :2, nome : "julia"}
]

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('rota principal')
})

//listagem de cadastros
app.get('/users', (req, res) => {
    res.status(200).json(users)
})

//cadastrar
app.post('/users', (req, res) => {
    users.push(req.body);
    res.send("sucesso")

})

//buscar por id e alterar
app.put('/users/:id', (req, res) =>{
    let index = search(req.params.id);
    users[index].nome = req.body.nome;
    res.json(users)
})

//buscar por id e deletar
app.delete('/users/:id', (req, res) =>{
    let index = search(req.params.id);
    users.splice(index ,1)
    res.json(users)
})

function search(id){
    return users.findIndex(user => user.id == id);
}
//porta
app.listen(port);
