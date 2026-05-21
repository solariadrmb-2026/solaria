SOLARIA

Descrição

O Solaria é um sistema web para monitoramento e automação de uma irrigação inteligente utilizando IoT (Internet das Coisas), sensores e integração com Firebase em tempo real.

O projeto utiliza uma ESP32 responsável por coletar dados dos sensores e enviar as informações para o Firebase, permitindo que o sistema web monitore e controle a horta remotamente.

O sistema permite acompanhar:
- Umidade do solo
- Luminosidade
- Temperatura ambiente
- Umidade do ar
- Controle automático e manual da irrigação

A plataforma possui autenticação de usuários, dashboard em tempo real e comunicação entre hardware e software via internet.

O projeto integra conhecimentos de:
- Desenvolvimento Web
- Internet das Coisas (IoT)
- Automação
- Banco de Dados em Tempo Real

Sobre o Projeto

O Solaria é um sistema desenvolvido para auxiliar no controle e monitoramento de uma horta automatizada, ou na agricultura familiar, permitindo acompanhar:
- Umidade do solo
- Luminosidade
- Temperatura
- Umidade do ar
- Controle automático/manual da bomba de irrigação

O sistema possui autenticação de usuários, painel dashboard e integração com banco de dados em tempo real.

Tecnologias Utilizadas no Protótipo

Hardware
- Controladora ESP32
- Sensor de Umidade do Solo
- Sensor de Umidade e Temperatura DHT11/DHT22
- Sensor de Luminosidade BH1750
- Módulo Relé ou Transistor TIP120/TIP122
- Bomba d’água 12V RS-385

Front-end (Sistema)
- HTML5
- CSS3
- JavaScript
- GitHub Pages

Back-end / Banco de Dados
- Firebase Authentication
- Firebase Realtime Database

Ferramentas
- Git
- GitHub
- GitHub Pages
- Visual Studio Code
- Arduino IDE

Estrutura do Projeto
```bash
solaria/
│
├── index.html
├── dashboard.html
│
├── css/
│   ├── style.css
│   ├── menu.css
│   └── theme.css
│
├── js/
│   ├── login.js
│   ├── dashboard.js
│   ├── firebase.js
│   ├── menu.js
│   └── theme.js
│
└── README.md

Funcionalidades de permissões
- Login de usuários
- Dashboard em tempo real
- Monitoramento de sensores
- Controle manual da bomba
- Controle automático da irrigação
- Tema claro/escuro
- Interface responsiva

Funcionamento gerais do Sistema
1. A ESP32 realiza a leitura dos sensores
2. Os dados são enviados para o Firebase
3. O sistema web consulta os dados em tempo real
4. O usuário visualiza as informações no dashboard
5. O comando de irrigação pode ser enviado pelo painel
6. A ESP32 recebe o comando e ativa/desativa a bomba

Acesse o Projeto
https://solariadrmb-2026.github.io/solaria/

Como Executar Localmente
1. Clone o repositório
```bash
git clone https://github.com/solariadrmb-2026/solaria.git
```
2. Abra a pasta no VS Code
3. Execute utilizando o Live Server

Preview
Em breve...

Equipe de Desenvolvimento

Alunas do CETI Dona Rosaura Muniz Barreto:

Enedina Aparecida Duarte de Jesus Lima, Laura Beatriz Gomes de Sousa, Maria de Fátima Araújo Cardoso,Maria Eduarda Tavares Soares e Maria Gizele Rodrigues da Silva.

Licença

Este projeto é destinado inicialmente à redução do desperdício de água na agricultura familiar. Futuramente, poderá ser expandido como uma solução tecnológica voltada para médios e grandes agricultores.
