const express = require('express'); // IMPORTANDO O EXPRESS

const app = express(); //CRIANDO A APP WEB 
const PORTA = 3000; // VAI RODAR NA PORTA 3000

let tarefas=[]; // let variavel que pode mudar 
let proximoId=1;//so a variavel proximo id


//middleware JSON
app.use(express.json()); // faz com que a api receba dados json sem isso nao vai pro postman

//usamos arrow function porser mais moderno *shrug* e mais facil de ler

app.get('/', (req, res) => { // AQUI CRIA UMA ROTA APANEAS PROS PEDIDOS DO GET (ABRIR NAVEGADOR) NESSE CASO O '/' E NOSSO LOCAL HOST
             //REQ RES: PESSOA QUE MANDOU/ OQ VAMOS RESPONDER
             
app.get('/tarefas',(req,res)=>{//o get tarefas lista todas as tarefas
    res.json({
        sucesso:true,//indica se deu certo
        total:tarefas.length,//mostar quantas tarefas tem na lista
        tarefas:tarefas//envia as tarefas
    });
});

res.json({mensagem:'TESTEAPI pagina principal ICARO'});// teste pra ver se deu certo a pagina principal
});


app.listen(PORTA,()=>{ // ele procura pela porta que nos setamos que nesse caso eh o 3000 e se funcionar ele printa que esta funcionando
    console.log('servidor funcionando');
    console.log('ta na porta http://localhost:3000')
})