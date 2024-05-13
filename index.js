// Importanto as configs do arquivo dotenv
require("dotenv").config();


/* Vmos importa as bibliotecas do servidor express, banco de dados mysql, segurança de requisições com o helmet, informações sobre as requisições com o morgan
e ouyras dependencias */

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// importa a rota de  acesso aos endpoints do usuario 
const router = require("./routes/usuario")

// vamos criar uma constante para instanciar o servidor express, para ativar o servidor 
const app = express();
// ativar o helmet
app.use(helmet());
// ativar o morgan com informações completas. Opção combined
app.use(morgan("combined"))
// ativar a manipulação de dados em formato JSON
app.use(express.json())


// ativicar as rotas do usuario
app.use("/api/v1/usuario",router);
// aplicar a porta de comunicação em 5051
app.listen(process.env.HOST_PORT,()=>console.log("Servidor online em "+process.env.HOST_API+":"+process.env.HOST_PORT ));