# Boas vindas ao repositório do Delivery App :bread:! 
Projeto criado por Tomaz Dimas e mais 5 desenvolvedores durante o curso de Desenvolvimento Web da Trybe.

# Descrição

O Delivery APP é um projeto Full Stack que simula uma aplicação de entrega de bebidas e comidas, possuindo uma interface para o usuário cliente e vendedor utilizarem, mostrando os produtos e acompanhamento de todo processo de entrega. Além disso todas informações e dados são inseridas, atualizadas e deletadas dinamicamente em uma base de dados

<details>
<summary><strong> Estrutura do projeto</strong></summary><br />

O projeto é composto de 3 entidades importantes para sua estrutura:

1️⃣ **Banco de dados:**
  - Um container docker MySQL já configurado no docker-compose através de um serviço definido como `db`.
  - Tem o papel de fornecer dados para o serviço de _backend_.

2️⃣ **Back-end:**
 - Deve rodar na porta `3001`, pois o front-end faz requisições para ele nessa porta por padrão;
 - Onde toda API vai funcionar.

3️⃣ **Front-end:**
  - O front se comunica com serviço de back-end pela url `http://localhost:3001` através dos endpoints que você deve construir nos requisitos.
  - A interface do site.

</details>

# Instalação e Inicialização

  - `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;
    - *uso (na raiz do projeto): `npm start`*

  - `stop`: Para e deleta as aplicações rodando no `pm2`;
    - *uso (na raiz do projeto): `npm stop`*

# Ferramentas e Habilidades utilizadas

- Node.JS
- MySQL
- MSC
- Sequelize
- JavScript
- Express
- React
- React Router Dom
- ESLint
