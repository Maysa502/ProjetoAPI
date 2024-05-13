//Importar as configurações do arquivo env
require("dotenv").config();
// Importar a biblioteca do mysql2
const mysql = require("mysql2");
 
//Criar uma função para exportar a conexao
//com banco de dados
const con = ()=>{
    return mysql.createConnection({
        host: process.env.HOST_API,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })
}
//Estamos exportando a função com e passando com parentese
//para a função já seja executada. Assim não será
//necessário instanciar e/ou ativar a função. Ela já irá ativada.
module.exports = con();
