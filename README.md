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

<details>
  <summary>
    <strong>Instruções</strong>
  </summary><br>
<h3>1. Faça o git clone na sua máquina e entre no diretório:</h3><br>

 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!<br>
 `git git@github.com:LucasBelgamann/delivery_app.git`<br>
 `cd delivery_app`<br>

 - Após isso rode o seguinte comando para iniciar um container MySql!<br>
 `docker run --name mysql-docker -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql`
 - Executar um `npm install` na raiz do projeto, e por fim os seguintes comandos para iniciar o projeto!<br>
 `cd back-end`<br>
 `npm run dev`<br>
 `cd front-end`<br>
 `npm start`<br>
 </details>

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
