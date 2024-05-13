// importar o sev express

const express = require("express");

// import a conexao com bancod e dados 
const con = require("../../database/conexao");

// fazer import do comado Routes para config as rotas
const router = express.Router()


//endpoint para cadstrar os usuarios  
router.post("/insert",(req,res)=>{
    con.query("INSERT INTO usuario SET ?", req.body,(erro,resultado)=>{
        if(erro){
            return res.status(500).send({msg:`Erro inesperado: ${erro}`})
        }
        res.status(201).send({msg:"Usuario cadastrado",playload:resultado})
    })
})
// para usar a rota usuario  no arquivo de entrypoint(index.js) devemos exporta-lo
module.exports = router;