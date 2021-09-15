# Projeto Final do Módulo 3 da Blue EdTech - API Livros

![Livros de Programação](https://www.brasilcode.com.br/wp-content/uploads/2020/01/Os-melhores-livros-de-programa%C3%A7%C3%A3o-1024x478.jpg)

## Projeto Final do Módulo 3: Criar uma API RESTful com Node.js e os seguintes requisitos:

1. Ter uma tabela no banco de dados;
2. Possuir essa estrutura de pastas: 
* server.js
* src >
  controllers, database, middlewares, models (desnecessário caso use mongodb drive), routes 
3. Possuir ao menos uma Middleware;
4. Possuir o CRUD completo;
5. Utilizar .env para dados sensíveis e Possuir um arquivo .gitignore específico para nodejs;
6. O projeto deve ser versionado no GitHub e Possuir um README.md explicando o porque do seu projeto e mostrando como o executar;
7. Implemente o cors em suas rotas;
8. Implemente uma rota de filtro, para buscar todos os atribudos do seu document de forma opcional, via Query Params;
9. É necessário realizar o deploy do seu projeto no Heroku;
10. Utilizar o Mongo Atlas para o armazenar o banco em nuvem.

## Executando o Projeto
Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).

Além disso, você precisa criar o arquivo .env com a url do seu banco, utilize o arquivo .env.exemple para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_marvel.

### Agora você pode executar o projeto:
* Para executar o projeto com o nodemon, digite no terminal
>npm run dev
* Para executar o projeto com o node, digite no terminal:
>npm start

## Testando a API
### Você pode utilizar as ferramentas:
* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

### Exemplos de URLs:
* Essa é a URL de teste padrão: http://localhost:3000/livros
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/livros/"ID"
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/livros/filter?titulo=Codigo&autor=bob

### Essa é a estrutura JSON para fazer o POST e o PUT:
    {
        "titulo": "Codigo Limpo",
        "identidade": "Robert Cecil Martin",
        "resumo": "Código limpo está divido em três partes. Na primeira há diversos capítulos que descrevem os princípios, padrões e práticas para criar um código limpo. A segunda parte consiste em diversos casos de estudo de complexidade cada vez maior. Cada um é um exercício para limpar um código – transformar o código base que possui alguns problemas em um melhor e eficiente. A terceira parte é a compensação: um único capítulo com uma lista de heurísticas e "odores" reunidos durante a criação dos estudos de caso. O resultado será um conhecimento base que descreve a forma como pensamos quando criamos, lemos e limpamos um código.",
        "imgUrl": "https://images-na.ssl-images-amazon.com/images/I/4153E2zZmTS._SX350_BO1,204,203,200_.jpg"
    }

### O deploy desse projeto está em:
https://api-proj-final-mod-3.herokuapp.com/livros
