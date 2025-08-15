
# Ava-testes-automatizados (Cypress)

Este repositório contém o projeto de testes end-to-end com Cypress para o PORTAL AVA.

## 📋 Requisitos

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes)
- **Cypress** (versão 14.5.4 - instalado automaticamente)

## 🏗️ Estrutura do Projeto

```
cypress/
├── e2e/                    # Especificações dos testes
│   ├── api/               # Testes de API
│   └── ui/                # Testes de interface
│       └── login/         # Testes de login
├── fixtures/              # Dados de teste
│   └── acessoAmbiente.json # Configurações de ambiente
├── screenshots/           # Screenshots dos testes
├── downloads/             # Arquivos baixados
└── support/               # Arquivos de suporte
    ├── e2e.js            # Configurações globais
    ├── exceptions/        # Tratamento de exceções
    ├── intercepts/        # Interceptações de API
    └── login/            # Comandos e elementos de login
```

## 🚀 Como executar

### Instalação
```bash
npm install
```

### Executar testes
```bash
# Abrir Cypress Test Runner (modo interativo)
npm run open

# Executar testes em modo headless
npm test
```

## ⚙️ Configuração de Ambiente

### Arquivo `acessoAmbiente.json`

O projeto utiliza o fixture `cypress/fixtures/acessoAmbiente.json` para gerenciar configurações de diferentes ambientes de teste. Este arquivo é **ESSENCIAL** para o funcionamento dos testes.

#### 📁 Localização
```
cypress/fixtures/acessoAmbiente.json
```

#### 📝 Estrutura do arquivo

```json
{
  "sprint": {
    "username": "seu_usuario_sprint",
    "password": "sua_senha_sprint",
    "url": "url_ambiente"
  },
  "producao": {
    "username": "seu_usuario_producao",
    "password": "sua_senha_producao",
    "url": "url_ambiente"
  }
}
```

#### 🔧 Como configurar

1. **Crie o arquivo** `cypress/fixtures/acessoAmbiente.json` se não existir
2. **Configure os ambientes** desejados (sprint, produção)
3. **Adicione suas credenciais** reais para cada ambiente