# Desenvolvimento-WEB
Projeto Da Faculdade

# API de Tarefas 

Este projeto é uma API REST simples para gerenciar uma lista de tarefa, desenvolvida com Node.js e Express. 
As tarefas são armazenadas em memória e a API oferece as operações CRUD básicas.

Pré-requisitos

Para rodar esta aplicação, você precisará ter:

*   **Node.js** (e **npm**) instalado.
*   **Postman** (ou outra ferramenta similar) para testar a API.
*   
!!!!!!!!!!NO POSTMAN MUDAR O BODY NO POST E NO PUT PRA RAW SE NAO ELE  DA ERRO!!!!!!!!!!!!!!


 Instalação e Execução

1.  **Colonar o repositorio pra sua maquina recomendo o github desktop ele quase nunca falha
    ```bash
    git clone https://github.com/Wkarus/Desenvolvimento-WEB
    ```
2.  **Navegue ate a pasta correta senao ele nao vai funcionar
    ```bash
    cd FullstackRecuperacaoIcaro 
    ```
3.  **Instale as dependências**: 
    ```bash
    npm install  caso ele bugue use abaixo 
    npm install express    

    ```
4.  **Inicie o servidor**:
    ```bash
    node servidor.js
    ```
    O servidor estará rodando em `http://localhost:3000`.

## Rotas da API

A API oferece as seguintes rotas:

| Método HTTP | Rota             | Descrição                                 |
| :---------- | :--------------- | :---------------------------------------- |
| `POST`      | `/tarefas`       | Cria uma nova tarefa.                     |
| `GET`       | `/tarefas`       | Lista todas as tarefas.                   |
| `PUT`       | `/tarefas/id`   | Atualiza uma tarefa pelo ID.               |
| `DELETE`    | `/tarefas/id`   | Exclui uma tarefa pelo ID.                 |

## Exemplos de JSON

### 1. Criar Tarefa (`POST /tarefas`)
```json
{
    "titulo": "Organizar arquivos",
    "descricao": "Separar documentos por categoria."
}



NO POSTMAN MUDAR O BODY NO POST E NO PUT PRA RAW SE NAO ELE  DA ERRO****

