# Pokédex EBAC

![image](https://github.com/user-attachments/assets/d87f5574-0cb7-45dd-a9cb-a764a3e59eb4)

*Uma Pokédex interativa desenvolvida com Node.js*  

## 📌 Sobre o Projeto
Este projeto foi desenvolvido em conjunto com o professor durante o curso da EBAC. A Pokédex permite que os usuários pesquisem e explorem detalhes sobre diversos Pokémons de forma intuitiva e dinâmica. A aplicação consome dados de uma API externa para exibir informações como nome, tipo, habilidades e estatísticas de batalha.

Durante o desenvolvimento, aplicamos conceitos fundamentais de back-end utilizando Node.js e Express, além de consumo de APIs com Axios e renderização dinâmica com EJS. O projeto também inclui estilização com Bootstrap para garantir uma interface moderna e responsiva.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework para criação de APIs
- **Axios** - Cliente HTTP para consumo da API
- **EJS** - Motor de templates para renderização dinâmica
- **Bootstrap** - Estilização e responsividade

## ⚠️ Configuração das Variáveis de Ambiente

Antes de iniciar o projeto, é necessário configurar as variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione as seguintes informações:

```sh
MONGO_URL ='SUA URL DE CONEXÃO MONGO'

API_EXTERNA_URL = 'SUA URL PARA API DOS POKEMONS'

PORTA_APLICACAO = 'Portaem que a aplicação irá rodar'.

SEGREDO_JWT = 'qualquer segredo'

SESSION_SECRET = 'segredo secreto de sessão'

GOOGLE_OAUTH_CLIENT_ID = 'pegue o seu'

GOOGLE_OAUTH_CLIENT_SECRET = 'pegue o seu'

GOOGLE_OAUTH_REDIRECT_URI = 'http://localhost:/auth/oauth2/redirect/google'

GITHUB_CLIENT_ID = 'pegue o seu'

GITHUB_CLIENT_SECRET = 'pegue o seu'

GITHUB_CLIENT_URL = 'http://localhost:/auth/oauth2/redirect/github'
```

Certifique-se de preencher os valores corretamente para garantir o funcionamento adequado da aplicação.

## 📦 Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/pokedex-ebac.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd pokedex-ebac
   ```
3. Instale as dependências:
   ```sh
   npm install axios bcrypt cors dotenv ejs express express-ejs-layouts express-session jsonwebtoken mongoose nodemon passport passport-github2 passport-google-oauth passport-local
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```
5. Acesse no navegador:
   ```sh
   http://localhost:3000
   ```

## 📌 Funcionalidades

- 🔎 Buscar Pokémons pelo nome ou ID
- 📜 Exibir informações detalhadas sobre cada Pokémon
- 🎨 Interface responsiva e amigável
- 🔄 Atualização dinâmica de informações

## 🎨 Layout

O design da Pokédex foi inspirado no visual clássico dos jogos, utilizando cores vibrantes e uma interface intuitiva para melhorar a experiência do usuário.

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias! Para isso:
1. Faça um fork do repositório
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha nova feature'`
4. Faça um push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

Desenvolvido com ❤️ por Gustavo Hortega(https://github.com/GustavoHortega)

