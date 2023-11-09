# aula-04

Desafio: Implementando Rotas de Login e Rotas Protegidas

Objetivo:
Desenvolver um aplicativo Express.js com rotas de login e rotas protegidas. Os usuários precisarão fazer login para acessar as rotas protegidas.

Tarefas:

Crie um array de objetos simulando usuários com informações como nome de usuário e senha. Por exemplo:

```javascript
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  // Adicione mais usuários, se necessário
];
```

Crie um middleware de autenticação que verifica se o nome de usuário e a senha fornecidos na solicitação correspondem a um usuário válido no array users. Se a autenticação for bem-sucedida, armazene um valor de autenticação (por exemplo, um token) no objeto req para identificar o usuário logado. utilize a funcão `randomUUID`do pacote `crypto`

`import { randomUUID } from "crypto"`

```javascript
const tokens = [
  { username: 'user1', token: '7aadf302-7e55-11ee-b962-0242ac120002' },
  { username: 'user2', token: '7aadf302-7e55-11ee-b962-0242ac120002' },
  // Adicione mais usuários, se necessário
];
```

Defina duas rotas:

Rota de login: /login - Esta rota deve permitir que os usuários forneçam um nome de usuário e senha para fazer login.
Rota protegida: /protegido - Esta rota só deve ser acessível por usuários autenticados.
Na rota de login, verifique as credenciais fornecidas pelo usuário e, se forem válidas, conceda acesso à rota protegida. Caso contrário, exiba uma mensagem de erro.

Na rota protegida, verifique se o usuário está autenticado (com base no token ou outro valor armazenado no objeto req). Se o usuário estiver autenticado, exiba uma mensagem de boas-vindas. Caso contrário, redirecione o usuário de volta para a rota de login.