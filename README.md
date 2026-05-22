# SOLARIA

# Descrição

O **Solaria** é um sistema web para monitoramento e automação de uma irrigação inteligente utilizando **IoT (Internet das Coisas)**, sensores e integração com **Firebase em tempo real**.

O projeto utiliza uma **ESP32** responsável por coletar dados dos sensores e enviar as informações para o Firebase, permitindo que o sistema web monitore e controle a horta remotamente.

**O sistema permite acompanhar:**
- Umidade do solo
- Luminosidade
- Temperatura ambiente
- Umidade do ar
- Controle automático e manual da irrigação

A plataforma possui autenticação de usuários, dashboard em tempo real e comunicação entre hardware e software via internet.

# Sobre o Projeto

O Solaria foi desenvolvido para auxiliar no controle e monnitoramento de hortas automatizadas e da agricultura familiar, oferecendo uma solução acessível e inteligente para redução do desperdício de água.

**O sistema permite:**
- Monitoramento em tempo real
- Automação da irrigação
- Controle manual da bomba d'água 
- Visualização dos sensores pelo dashboard
- Integração entre hardware e software

**O projeto integra conhecimentos de:**
- Desenvolvimento Web
- Internet das Coisas (IoT)
- Automação
- Banco de Dados em Tempo Real

# Tecnologias Utilizadas

## Hardware
- ESP32
- Sensor de Umidade do Solo
- Sensor de Umidade e Temperatura DHT11/DHT22
- Sensor de Luminosidade BH1750
- Módulo Relé ou Transistor TIP120/TIP122
- Bomba d’água RS-385 12V

## Front-end (Sistema)
- HTML5
- CSS3
- JavaScript
- GitHub Pages

## Back-end / Banco de Dados
- Firebase Authentication
- Firebase Realtime Database
- Firebase Storage

## Ferramentas
- Git
- GitHub
- GitHub Pages
- Visual Studio Code
- Arduino IDE

# Estrutura do Projeto
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

```

# Funcionalidades de permissões
- Login de usuários
- Autenticação da Firebase
- Dashboard em tempo real
- Monitoramento de sensores
- Controle manual da bomba
- Controle automático da irrigação
- Tema claro/escuro
- Interface responsiva
- Integração IoT com ESP32

# Funcionamento do Sistema
1. A ESP32 realiza a leitura dos sensores
2. Os dados são enviados para o Firebase
3. O sistema web consulta os dados em tempo real
4. O usuário visualiza as informações no dashboard
5. O comando de irrigação pode ser enviado pelo painel
6. A ESP32 recebe o comando e ativa/desativa a bomba

Acesse o Projeto
https://solariadrmb-2026.github.io/solaria/

# Como Executar Localmente

## 1. Clone o repositório
```bash
git clone https://github.com/solariadrmb-2026/solaria.git
```

## 2. Abra a pasta no VS Code
```bash
cd solaria
```

## 3. Execute utilizando o Live Server
Instale a extensão **Live Server** no VS Code e execute o projeto localmente.

## Preview
Em breve...

## Equipe de Desenvolvimento

Projeto desenvolvido pelas alunas do **CETI Dona Rosaura Muniz Barreto**:

- Enedina Aparecida Duarte de Jesus Lima
- Laura Beatriz Gomes de Sousa
- Maria de Fátima Araújo Cardoso
- Maria Eduarda Tavares Soares
- Maria Gizele Rodrigues da Silva

# Licença

Este projeto foi desenvolvido com foco inicial na redução do desperdício de água na agricultura familiar.

Futuramente, poderá ser expandido como uma solução tecnológica voltada para médios e grandes produtores agrícolas.