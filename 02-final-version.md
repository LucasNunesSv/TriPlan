# **CSI606-2025-02 - Remoto - Trabalho Final - Resultados**

## *Lucas Nunes Silveira - 20.2.8040*

### Resumo

O **TriPlan** é uma aplicação web fullstack desenvolvida para planejamento e organização de viagens. O sistema permite aos usuários criar viagens com destino e datas definidas, convidar participantes via email, gerenciar atividades organizadas por dia e horário, além de cadastrar links importantes relacionados à viagem. A aplicação foi construída com React + TypeScript + Tailwind CSS no frontend, Node.js + Fastify + TypeScript no backend, e SQLite com Prisma ORM como sistema gerenciador de banco de dados. O projeto implementa conceitos de banco de dados relacional, API RESTful com validação de dados via Zod, tratamento de erros centralizado, envio de emails para confirmação, e uma interface de usuário moderna e de fácil usabilidade e formulários validados.

### 1. Funcionalidades implementadas

Todas as funcionalidades principais previstas para o sistema foram implementadas com sucesso:

#### **Backend (API RESTful)**
- **CRUD completo de Viagens (Trips)**: Criação, leitura, atualização e confirmação de viagens
- **Gestão de Participantes**: 
  - Criação de convites para participantes via email
  - Confirmação de participação através de link enviado por email
  - Listagem de todos os participantes de uma viagem
  - Consulta individual de participante
  - Distinção entre proprietário da viagem e convidados
- **Gerenciamento de Atividades**:
  - Criação de atividades com título e horário de ocorrência
  - Listagem de atividades agrupadas por data
  - Validação de horários e datas
- **Links Importantes**:
  - Cadastro de links relevantes (hotéis, passagens, reservas)
  - Listagem de todos os links de uma viagem
- **Validações robustas**: 
  - Validação de dados de entrada usando Zod (biblioteca de validação de schema)
  - Verificação de datas válidas (data de início não pode ser no passado, data de término não pode ser anterior à data de início)
  - Validação de formatos de email
  - Validação de UUIDs para IDs de viagens e participantes
- **Sistema de Confirmação**:
  - Endpoint para confirmar viagem pelo proprietário
  - Endpoint para confirmação de presença de participantes
- **Envio de Emails**:
  - Integração com Nodemailer para envio de emails transacionais
- **Middleware de CORS**: Configurado para permitir comunicação entre frontend e backend
- **Middleware de tratamento de erros**: Captura e responde erros de forma consistente e padronizada
- **Type Safety**: Uso de TypeScript em todo o backend com tipagem estrita

#### **Frontend (Interface Web)**
- **Fluxo de criação de viagem**: 
  - Página inicial com formulário de criação em múltiplos passos
  - Step 1: Definição de destino e período da viagem com seletor de datas
  - Step 2: Convite de participantes com entrada de emails
  - Modal de confirmação final antes de criar a viagem
- **Página de detalhes da viagem**: Interface organizada em seções:
  - **Header**: Exibição do destino e período da viagem com opção de atualização
  - **Seção de Atividades**: 
    - Listagem de atividades agrupadas por data
    - Indicador visual de dia e horário
    - Modal para cadastro de nova atividade
  - **Seção de Links Importantes**:
    - Listagem de links com título e URL
    - Modal para adicionar novo link
    - Links clicáveis que abrem em nova aba
  - **Seção de Convidados**:
    - Lista de participantes confirmados
    - Indicador visual de confirmação de presença
    - Exibição de nome e email
- **Modais Interativos**:
  - Modal de confirmação de viagem
  - Modal de criação de atividade
  - Modal de criação de link
  - Modal de atualização de datas
- **Validações no Frontend**: 
  - Validação de formato de email
  - Validação de campos obrigatórios
  - Validação de datas
- **Comunicação com API**: 
  - Cliente HTTP centralizado usando Axios
  - Tratamento de erros de requisição
  - Loading states durante chamadas assíncronas
- **Navegação por Rotas**: 
  - Rota `/` para criação de viagem
  - Rota `/trips/:tripId` para detalhes da viagem
  - Navegação programática após criação da viagem
- **Ícones e UX**: 
  - Integração com Lucide React para ícones vetoriais consistentes
  - Componentes reutilizáveis (Button, TextInput)


#### **Banco de Dados**
- **Estrutura Relacional**: Tabelas `trips`, `participants`, `activities` e `links` com relacionamentos bem definidos
- **ORM Prisma**: Utilização do Prisma como ORM para:
  - Modelagem de dados através do schema.prisma
  - Migrations versionadas e rastreáveis
  - Type-safe database queries
  - Geração automática de tipos TypeScript
- **SQLite**: Banco de dados leve e embutido (arquivo `dev.db`)
- **Migrations Versionadas**: 
  - Migration 1: Criação da tabela `trips`
  - Migration 2: Criação da tabela `participants` com relacionamento
  - Migration 3: Criação das tabelas `activities` e `links`
- **UUIDs**: Utilização de identificadores únicos universais para todas as entidades
- **Relacionamentos**:
  - One-to-Many: Trip → Participants
  - One-to-Many: Trip → Activities
  - One-to-Many: Trip → Links
- **Constraints**: Chaves estrangeiras, valores padrão e campos obrigatórios

### 2. Funcionalidades previstas e não implementadas

Durante o desenvolvimento, algumas funcionalidades previstas foram ajustadas ou não implementadas devido ao prazo de desenvolvimento e ao conflito de atividades de outras disciplinas: o sistema de marcação de conclusão de atividades, edição/exclusão de atividades e links após criação, e a possibilidade de adicionar novos convidados após a criação da viagem. Além disso, optou-se por utilizar SQLite ao invés de PostgreSQL com Docker para simplificar o ambiente de desenvolvimento e deployment. As funcionalidades que não foram implementadas não impedem o fluxo / usabilidade do sistema e podem ser classificadas como melhorias futuras para a tronar a aplicação mais robusta.

### 3. Outras funcionalidades implementadas

Além das funcionalidades básicas previstas, foram implementadas diversas melhorias e recursos adicionais:

- **Validação de Schema com Zod**: Implementação de validação robusta e type-safe usando a biblioteca Zod tanto no backend (em rotas) quanto para parsing de variáveis de ambiente

- **Type-Safe API com Fastify Type Provider**: Integração do `fastify-type-provider-zod` para garantir consistência entre validação de entrada e tipagem TypeScript

- **Error Handling Centralizado**: Implementação de middleware de tratamento de erros (`error-handler.ts`) e classe customizada de erro do cliente (`ClientError`) para respostas consistentes

- **Envio de Emails Transacionais**: Sistema completo de envio de emails usando Nodemailer com:
  - Templates HTML estilizados
  - Links de confirmação personalizados
  - Uso de serviço de email de teste (Ethereal Email) para desenvolvimento

- **Sistema de Migrations Versionado**: Histórico completo de alterações no banco de dados através das migrations do Prisma, permitindo evolução controlada do schema

- **Componentes Reutilizáveis**: Criação de componentes genéricos e reutilizáveis como Button e TextInput com variantes estilísticas

- **Configuração de Ambiente Type-Safe**: Sistema de validação de variáveis de ambiente com Zod, garantindo que todas as configurações necessárias estejam presentes e corretas

### 4. Principais desafios e dificuldades

Durante o desenvolvimento do projeto, diversos desafios foram enfrentados:

#### **Sincronização entre Frontend e Backend**
**Desafio**: Manter a interface do usuário atualizada com o estado mais recente após operações de criação, principalmente ao adicionar atividades e links.

**Solução**: Implementação de recarregamento seletivo de dados após cada operação bem-sucedida. Chamadas de atualização são disparadas após criação de atividades e links para garantir que a UI reflita o estado do servidor.

#### **Validação de Dados Consistente**
**Desafio**: Garantir que as validações no frontend e backend estejam alinhadas e que dados inválidos não cheguem ao banco de dados.

**Solução**: Uso da biblioteca Zod para definir schemas de validação reutilizáveis. No backend, integração com Fastify Type Provider Zod garante que as validações sejam executadas automaticamente antes de processar requisições. No frontend, validações manuais em formulários com feedback visual.

#### **Gerenciamento de Estado Assíncrono**
**Desafio**: Lidar com múltiplas operações assíncronas simultâneas (buscar viagem, participantes, atividades, links) sem causar condições de corrida ou estados inconsistentes.

**Solução**: Uso de hooks do React (useState, useEffect) com dependências corretas e loading states individuais para cada seção da interface, permitindo carregamento independente e paralelo.

#### **Sistema de Confirmação de Email**
**Desafio**: Implementar um fluxo de confirmação por email funcional sem infraestrutura de email real em desenvolvimento.

**Solução**: Integração com Ethereal Email (serviço de email fake para desenvolvimento) através do Nodemailer. Os links de confirmação são gerados e logados no console, permitindo testes completos do fluxo sem necessidade de servidor SMTP real.

#### **Relacionamentos no Prisma**
**Desafio**: Modelar corretamente os relacionamentos entre entidades (Trip, Participant, Activity, Link) e garantir integridade referencial.

**Solução**: Definição cuidadosa do schema.prisma com relacionamentos explícitos usando `@relation`, fields e references. Uso de migrations para aplicar alterações de forma controlada e rastreável.

#### **Formatação e Validação de Datas**
**Desafio**: Trabalhar com datas em diferentes formatos (ISO, formatadas, objetos Date) e garantir validações corretas (data de início no futuro, data de fim após início).

**Solução**: Uso da biblioteca DayJS para manipulação consistente de datas. Validações temporais implementadas tanto no backend (antes de salvar no banco) quanto no frontend (antes de enviar requisição).

#### **Tipagem TypeScript Complexa**
**Desafio**: Manter tipagem forte em todo o projeto, especialmente em requisições HTTP e respostas da API.

**Solução**: Uso de tipos gerados automaticamente pelo Prisma Client para entidades do banco de dados. Definição de interfaces TypeScript para requisições e respostas. Integração com Zod para inferência de tipos a partir de schemas de validação.

### 5. Instruções para instalação e execução

#### **Pré-requisitos**
- Node.js (versão 18 ou superior)
- npm ou yarn
- Git (para clonar o repositório)

**Nota importante**: Este projeto utiliza **SQLite** como banco de dados, que é um banco embutido em arquivo. Não é necessário instalar ou configurar PostgreSQL, MySQL ou qualquer outro servidor de banco de dados.

#### **Passo 1: Clonar o repositório**

```bash
git clone https://github.com/LucasNunesSv/TriPlan.git
cd TriPlan
```

#### **Passo 2: Configurar o Backend**

1. Navegue até a pasta do backend:

```bash
cd backend
```

2. Instale as dependências:

```bash
npm install
```

3. O arquivo `.env` já está configurado com valores padrão que funcionam imediatamente:

```
DATABASE_URL = "file:./dev.db"
API_BASE_URL = "http://localhost:3333"
WEB_BASE_URL = "http://localhost:5173"
PORT = 3333
```

Se desejar, você pode modificar estes valores conforme necessário.

4. Execute as migrations do Prisma para criar o banco de dados SQLite:

```bash
npx prisma migrate dev
```

Este comando irá:
- Criar o arquivo de banco de dados SQLite (`dev.db`) na pasta `prisma/`
- Aplicar todas as migrations (criação de tabelas trips, participants, activities e links)
- Gerar o Prisma Client com tipos TypeScript

#### **Passo 3: Configurar o Frontend**

1. Navegue até a pasta do frontend (a partir da raiz do projeto):

```bash
cd ../frontend
```

2. Instale as dependências:

```bash
npm install
```

#### **Passo 4: Executar o Backend e Frontend em conjunto**

Em um terminal, na pasta `backend`:

```bash
npm run dev
```

O servidor backend iniciará na porta 3333 (padrão). Você verá a mensagem:
```
Server running
```

Em outro terminal (mantenha o backend rodando), na pasta `frontend`:

```bash
npm run dev
```

O frontend será iniciado pelo Vite, geralmente em `http://localhost:5173`. O terminal mostrará a URL exata. Acesse esta URL no navegador para usar a aplicação.


#### **Observações Importantes**

- **Ordem de execução**: É importante iniciar o backend ANTES do frontend, pois o frontend faz requisições à API do backend assim que carrega.

- **Banco de dados**: O arquivo `dev.db` será criado automaticamente na pasta `backend/prisma/` quando você executar as migrations. Este arquivo contém todo o banco de dados SQLite.

- **Emails**: Durante o desenvolvimento, o sistema usa Ethereal Email (serviço de email fake). Quando um email é enviado (por exemplo, ao criar uma viagem), um link para visualizar o email será impresso no console do backend. Acesse este link para ver o email de confirmação.

- **Prisma Studio**: Para visualizar e manipular os dados do banco de dados através de uma interface web, execute (na pasta backend):

```bash
  npx prisma studio
```
  Isso abrirá uma interface gráfica em `http://localhost:5555` onde você pode ver e editar registros.

### 6. Referências

AIRBNB. **Airbnb JavaScript Style Guide**. GitHub, 2023. Disponível em: https://github.com/airbnb/javascript. Acesso em: dez. 2025.

FASTIFY. **Fastify Documentation**. Fastify, 2024. Disponível em: https://fastify.dev/. Acesso em: fev. 2026.

NODE.JS FOUNDATION. **Node.js Documentation**. Node.js, 2024. Disponível em: https://nodejs.org/en/docs/. Acesso em: jan. 2026.

PRISMA. **Prisma Documentation**. Prisma, 2024. Disponível em: https://www.prisma.io/docs. Acesso em: jan. 2026.

REACT. **React Documentation**. React, 2024. Disponível em: https://react.dev/. Acesso em: nov. 2025.

SQLITE. **SQLite Documentation**. SQLite, 2024. Disponível em: https://www.sqlite.org/docs.html. Acesso em: jan. 2026.

TAILWIND CSS. **Tailwind CSS Documentation**. Tailwind Labs, 2024. Disponível em: https://tailwindcss.com/docs. Acesso em: dez. 2025.

TYPESCRIPT. **TypeScript Documentation**. Microsoft, 2024. Disponível em: https://www.typescriptlang.org/docs/. Acesso em: jan. 2026.

VITE. **Vite Documentation**. Vite, 2024. Disponível em: https://vitejs.dev/. Acesso em: dez. 2025.

ZOD. **Zod Documentation**. GitHub, 2024. Disponível em: https://zod.dev/. Acesso em: jan. 2026.