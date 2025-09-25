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




// ... (código existente, como imports, app.use(express.json()), variáveis tarefas e proximoId)

// Rota para listar todas as tarefas
app.get('/tarefas', (req, res) => { 
    res.json({
        sucesso: true,
        total: tarefas.length, // aqui o total eh a quantidade de tarefas que adicionamos/criamos/deletamos no nosso vetor/array
        tarefas: tarefas
    });
});

// Rota/tarefas - Criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    //  Obtendo os dados da tarefa do corpo da requisição (req.body)
    const { titulo, descricao } = req.body; //(req.body) requisicao do corpo entao ele ta requerindo o titulo a descricao e se foi concluida 

    // 2. Validação simples: verificar se o título existe
    if (!titulo) {
        return res.status(400).json({ // esses estatus eu errei na prova EH UM BAD REQUEST 
            sucesso: false,
            mensagem: 'O título da tarefa é obrigatório!'
        });
    }

    // Criar a nova tarefa com um ID único
    const novaTarefa = {
        id: proximoId++, // Atribui um ID  e depois aumento mais 1 para a próxima tarefa
        titulo,          // { titulo: titulo } 
        descricao,       // { descricao: descricao }
        concluida: false // Toda tarefa nova começa como não concluída 
    };

    // 4. Adicionar a nova tarefa à nossa lista em memória
    tarefas.push(novaTarefa); // push faz o envio

    // 5. Enviar uma resposta de sucesso com a tarefa criada
    res.status(201).json({ // Status 201 significa "CRIADO"
        sucesso: true,
        mensagem: 'Tarefa criada com sucesso!',
        tarefa: novaTarefa   // tarefa ---> nova tarefa
    });
});

// 🎯 Rota PUT /tarefas/:id - Atualizar uma tarefa existente
app.put('/tarefas/:id', (req, res) => {
    // 1. Obter o ID da tarefa da URL (req.params)
    const idTarefa = parseInt(req.params.id); // req.params.id vem como string, precisamos converter para número

    // 2. Obter os dados de atualização do corpo da requisição (req.body) requisicao do corpo entao ele ta requerindo o titulo a descricao e se foi concluida 
    const { titulo, descricao, concluida } = req.body;

    // 3. Encontrar a tarefa na nossa lista em memória
    const indiceTarefa = tarefas.findIndex(t => t.id === idTarefa);

    // 4. Verificar se a tarefa foi encontrada
    if (indiceTarefa === -1) {
        return res.status(404).json({ // Status 404 significa "Not Found" (Não Encontrado)
            sucesso: false,
            mensagem: 'Tarefa não encontrada!'
        });
    }

    // 5. Atualizar  tarefas
    // Criamos uma cópia para não manipular diretamente o objeto original durante a atualização
    const tarefaAtualizada = { ...tarefas[indiceTarefa] }; // Copia da tarefa existente

    if (titulo !== undefined) { // Se o título foi enviado no corpo, atualiza. se titulo diferente de indefinido o titulo recebe o novo titulo que ta como         tarefaAtualizada.titulo = titulo;

        tarefaAtualizada.titulo = titulo;
    }
    if (descricao !== undefined) { // Se a descrição foi enviada no corpo, atualiza   
        tarefaAtualizada.descricao = descricao;
    }
    if (concluida !== undefined) { // Se o status de concluída foi enviado no corpo, atualiza
        tarefaAtualizada.concluida = concluida;
    }

    // Substituir a tarefa antiga pela atualizada na lista
    tarefas[indiceTarefa] = tarefaAtualizada;

    // 6. Enviar uma resposta de sucesso com a tarefa atualizada
    res.status(200).json({ // Status 200 significa "OK" (Sucesso)@!!!
        sucesso: true,
        mensagem: 'Tarefa atualizada com sucesso!',
        tarefa: tarefaAtualizada
    });
});

// Rota DELETE /tarefas/id - Excluir uma tarefa que ja exirte
app.delete('/tarefas/:id', (req, res) => {
    // 1. Obter o ID da tarefa da URL
    const id = parseInt(req.params.id); // Converte o ID de string para número

    // 2. Encontrar o índice da tarefa na nossa lista em memória // procurar a tarefa
    const tarefaIndex = tarefas.findIndex(t => t.id === id);

    // 3. Verificar se a tarefa existe
    if (tarefaIndex === -1) {
        return res.status(404).json({ sucesso: false, mensagem: 'Tarefa não encontradA' });
    }

    // 4. Remover a tarefa da lista
    tarefas.splice(tarefaIndex, 1); // Remove 1 elemento a partir do índice encontrado

    // 5. Enviar resposta de sucesso
    res.status(200).json({
        sucesso: true,
        mensagem: 'Tarefa excluída!'
    });
});

// Rota DELETE /tarefas/:id - Excluir uma tarefa existente
app.delete('/tarefas/:id', (req, res) => {
    // 1. Obter o ID da tarefa da URL
    const id = parseInt(req.params.id); // Converte o ID de string para número

    // 2. Encontrar o índice da tarefa na nossa lista em memória
    const tarefaIndex = tarefas.findIndex(t => t.id === id);

    // 3. Verificar se a tarefa existe
    if (tarefaIndex === -1) {
        return res.status(404).json({ sucesso: false, mensagem: 'Tarefa não encontrada.' });
    }

    // 4. Remover a tarefa da lista
    tarefas.splice(tarefaIndex, 1); // Remove 1 elemento a partir do índice encontrado

    // 5. Enviar resposta de sucesso
    res.status(200).json({ // codiogo de sucesso 200
        sucesso: true,
        mensagem: 'Tarefa excluída com sucesso!'
    });
});
res.json({mensagem:'TESTEAPI pagina principal ICARORECUPERECAO'});// teste pra ver se deu certo a pagina principal
});


app.listen(PORTA,()=>{ // ele procura pela porta que nos setamos que nesse caso eh o 3000 e se funcionar ele printa que esta funcionando
    console.log('servidor funcionando');
    console.log('ta na porta http://localhost:3000')
})