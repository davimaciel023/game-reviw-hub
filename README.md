
# 🎮 Games Explorer

**Games Explorer** é uma aplicação web desenvolvida em Angular com o objetivo de permitir que os usuários explorem jogos populares, vejam seus detalhes e leiam a descrição traduzida automaticamente para o português. A aplicação consome a API da [RAWG](https://rawg.io/apidocs) para exibir informações atualizadas sobre games e utiliza um servidor proxy com a API do [LibreTranslate](https://libretranslate.com) para traduzir descrições.

---

## 🎯 Objetivo

O objetivo do projeto é integrar e demonstrar o consumo de APIs externas, utilizando Angular como framework principal. Ele também mostra o uso de manipulação de rotas, chamadas HTTP, estilização responsiva e integração com serviços de backend para tradução automática de conteúdo.

---

## ⚙️ O que o sistema faz?

- Lista os jogos mais populares com imagem e nome
- Permite clicar em um jogo para visualizar:
  - Gêneros
  - Plataformas disponíveis
  - Descrição traduzida automaticamente para o português
- Inclui botão de voltar para a tela inicial
- Layout responsivo e agradável

---

## 🧠 Como o sistema funciona?

1. A tela inicial (`HomeComponent`) faz uma requisição para a API da RAWG e exibe os jogos em cards.
2. Ao clicar em um jogo, o usuário é redirecionado para a página de detalhes (`DetalhesExternosComponent`), onde:
   - A aplicação busca os dados detalhados do jogo via ID.
   - A descrição do jogo em inglês é enviada para um servidor proxy (`Express`) que repassa para a API do LibreTranslate.
   - O texto traduzido é exibido ao usuário.
3. A navegação é feita via rotas do Angular.
4. Um botão de "voltar" permite que o usuário retorne para a página inicial de forma rápida.

---

## 🚀 Como rodar o sistema

### 🔁 Pré-requisitos

- Node.js e npm instalados
- Angular CLI
- Git

---

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/games-explorer.git
cd games-explorer
```

---

### 2️⃣ Instale as dependências do Angular

```bash
npm install
```

---

### 3️⃣ Configure a API do RAWG

No arquivo `detalhes-externos.component.ts`, substitua `API_KEY` pela sua chave pessoal:

```ts
private readonly API_KEY = 'SUA_CHAVE_AQUI';
```

Você pode obter a chave gratuita aqui: https://rawg.io/apidocs

---

### 4️⃣ Configure o servidor de tradução

Crie um arquivo chamado `server.js` na raiz do projeto com o seguinte conteúdo:

```js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/traduzir', async (req, res) => {
  try {
    const { q, source, target, format } = req.body;
    const response = await axios.post('https://libretranslate.de/translate', req.body, {
      headers: { 'Content-Type': 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao traduzir:', error.message);
    res.status(500).json({ error: 'Erro ao traduzir o texto.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy rodando em http://localhost:${PORT}/traduzir`);
});
```

Instale as dependências e inicie o servidor:

```bash
npm install express axios cors
node server.js
```

---

### 5️⃣ Rode o projeto Angular

```bash
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

---

## 📁 Estrutura principal

```
src/
├── app/
│   ├── home/
│   │   └── home.component.ts/html/scss
│   ├── detalhes-externos/
│   │   └── detalhes-externos.component.ts/html/scss
│   ├── shared/
│   └── app.routes.ts
├── assets/
├── styles.scss
└── index.html
```

---

## 📌 Possibilidades futuras

- Adicionar login e favoritos
- Dark mode
- Paginação de jogos
- Filtros por gênero e plataforma

---

## 🧑‍💻 Autor

Desenvolvido por [Davi Maciel](https://github.com/davimaciel023)

---

## 📄 Licença

Este projeto está sob a licença MIT.
