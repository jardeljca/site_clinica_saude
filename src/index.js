const express = require('express')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000

const Usuario = mongoose.model('Usuario', {
    nome: String,
    sobreNome: String,
    email: String,
    senha: String,
    confirmacaoSenha: String,
});


app.get("/", async (req, res) => {
    const usuario = await Usuario.find()
    return res.send(usuario)
})

app.delete("/:id", async (req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id)
    return res.send(usuario)
})

app.put("/:id", async (req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(
        req.params.id,
        {
            nome: req.body.nome,
            sobreNome: req.body.sobreNome,
            email: req.body.email,
            senha: req.body.senha,
            confirmacaoSenha: req.body.confirmacaoSenha
        },
        { new: true }
    );
    return res.send(usuario);
});

app.post("/", async (req, res) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        sobreNome: req.body.sobreNome,
        email: req.body.email,
        senha: req.body.senha,
        confirmacaoSenha: req.body.confirmacaoSenha
    })
    await usuario.save()
    return res.send(usuario)
})

app.listen(port, () => {
    mongoose.connect('mongodb+srv://jardeljcadm:caleby07@usuariosclinicasaude.uezgxl6.mongodb.net/?retryWrites=true&w=majority&appName=UsuariosClinicaSaude');
    console.log('Aplicação rodando')
})