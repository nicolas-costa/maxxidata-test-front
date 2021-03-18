# Backend Maxxidata Coding Exercise

Construído com:
* ReactJs
* Material UI
* Axios
* React dotenv
* React Router


## Requisitos

* Node 14.16
* npm 6.14

## Instalação
```
git clone https://github.com/nicolas-costa/maxxidata-test-front.git
```

Na raiz do projeto, rode:

```
npm install
```

Faça um arquivo .env seguindo o modelo do arquivo .env.example e coloque lá os dados pertinentes para a conexão com a API.   

**Atenção para a possibilidade de colisão de portas caso o backend já esteja rodando e esteja configurado 
para usar a porta 3000 que é a mesma que o servidor do react utiliza por padrão.** 

Certificando-se de que a API esteja rodando OK, execute:

```
npm run start 
```

Após isso, o servidor deverá estar rodando em http://localhost:3000,

## Ideias não implementadas/Pendências 

* Autenticação.
* Redux.
* Redux-Saga.
* Redux-Forms.
* Mais personalização dos componentes (com Styled components talvez).
* Mascaras nos campos.
* Melhor validação e tratamento de erros no front.
* Testes.
* App Android.
