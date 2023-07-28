![2023-07-02_18h19_10-_online-video-cutter com_](https://github.com/danibenfica/desafio-to-do-em-React/assets/103818625/57a08f4c-3673-485d-ab18-55feea733140)


## Projeto da Lista de Tarefas em React

Para acessar a Lista de tarefas, clique no link abaixo:

[Lista de Tarefas](https://react-vite-to-do-list.netlify.app/)


Este projeto foi desenvolvido em React e consiste em uma aplicação simples de Lista de Tarefas, na qual os usuários podem adicionar, editar e excluir tarefas. Irei explicar a estrutura do projeto e destacar alguns trechos de código importantes.

### Tecnologias utilizadas:

React
JavaScript
HTML
CSS
Sass
Vite

### Como instalar

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode verificar digitando `node -v` em seu terminal. Se não tiver o Node.js instalado, você pode baixá-lo em https://nodejs.org e seguir as instruções de instalação para o seu sistema operacional.

2. Faça o download do projeto da Lista de Tarefas em React em um diretório de sua escolha. Você pode clonar o repositório do GitHub usando o seguinte comando em seu terminal:

   ```
   git clone https://github.com/seu-usuario/lista-de-tarefas-react.git
   ```

   Certifique-se de substituir "seu-usuario" pelo seu nome de usuário do GitHub ou use a URL correta para o repositório que você deseja clonar.

3. Navegue para o diretório do projeto no seu terminal usando o comando `cd to-do`.

4. Execute o comando `npm install` ou `yarn install` para instalar as dependências do projeto. Isso instalará todas as bibliotecas e pacotes necessários para executar o projeto.

5. Após a conclusão da instalação das dependências, execute o comando `npm start` ou `yarn start`. Isso iniciará o servidor de desenvolvimento e abrirá o projeto no seu navegador padrão.

## Nova funcionalidade, modo claro e escuro

Nesta versão é possível alterar o tema da aplicação, sendo modo claro ou escuro.

## O que foi feito: 

1. **Criando o Tema Claro e Escuro:**
   - Foi implementado o conceito de tema claro e escuro para o projeto, permitindo que o usuário alterne entre os dois modos visuais.
   - Foram criados arquivos de estilo separados para cada tema, `index.scss` e `indexLight.scss`, e importados nos componentes correspondentes para que a aparência do aplicativo mude dinamicamente com base no tema selecionado.

2. **Criando o Contexto de Tema:**
   - Foi criado um contexto de tema usando o React Context API, que permite compartilhar o estado do tema entre os componentes da aplicação.
   - O contexto de tema foi definido em `ThemeContext.js`, onde é utilizado o hook `useState` para gerenciar o estado do tema (claro ou escuro).
   - Foi implementada a função `toggleTheme` para alternar entre o tema claro e escuro quando o usuário clica no botão de alternância.

3. **Adicionando Ícones do Sol e Lua para a Alternância de Tema:**
   - Foram adicionados ícones do sol e da lua ao projeto para representar visualmente o tema claro e escuro.
   - No componente `Principal.jsx`, um botão de alternância de tema foi adicionado. O ícone do sol é exibido quando o tema é claro e o ícone da lua é exibido quando o tema é escuro.

4. **Integrando o Tema Claro e Escuro no Componente `ToDo`:**
   - No componente `ToDo.jsx`, foram importadas as imagens dos ícones correspondentes para os temas claro e escuro, permitindo que o botão de alternância de tema mude de acordo com o tema selecionado.
   - As classes de estilo também foram atualizadas para se adaptar aos temas claro e escuro.

5. **Criando o Componente `HeaderOrganization`:**
   - Foi criado o componente `HeaderOrganization.jsx`, que é responsável por renderizar o cabeçalho da página `Organization`.
   - O componente exibe o título da página e outros elementos de cabeçalho.

6. **Aplicando Tema Claro e Escuro no Componente `Organization`:**
   - No componente `Organization.jsx`, foram aplicados os temas claro e escuro para os estilos das seções de texto usando as classes de estilo correspondentes.
   - O botão de alternância de tema também foi adicionado ao componente `Organization`, permitindo que o usuário alterne o tema entre claro e escuro.

7. **Atualizando o Componente `Principal`:**
   - O componente `Principal.jsx` foi atualizado para mostrar o título principal da aplicação, incluindo a alternância de tema.

8. **Estilizando o Botão de Alternância de Tema:**
   - Foi criado um botão de alternância de tema estilizado no arquivo `index.scss` e `indexLight.scss`, que desliza da posição do sol para a posição da lua (ou vice-versa) quando o usuário alterna entre os temas.
   - O ícone do sol e da lua é exibido dentro do botão e alterado conforme o tema selecionado.
   - A alteração foi aplicada em todos os componentes.


### Explicação da nova funcionalidade

Esta versão utiliza o contexto de tema para fornecer suporte a temas claro e escuro. O contexto é criado no arquivo `ThemeContext.jsx` e inclui o estado `isLightMode` e a função `toggleTheme`, que permite alternar entre os temas. Abaixo estão as partes relevantes do código:

```jsx

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
```

Neste código, o contexto é criado com `createContext()` e o provedor `ThemeProvider` é definido. O provedor envolve a árvore de componentes, permitindo que os componentes filhos acessem o estado e a função de tema através do hook `useTheme` sem a necessidade de passar props manualmente.

A variável `isLightMode` é o estado que armazena a informação sobre o tema atual. A função `toggleTheme` permite alternar entre os temas claro e escuro, atualizando o valor de `isLightMode` com base no estado anterior.

### Componentes Relacionados ao Tema

Além disso, vários componentes utilizam o contexto de tema para aplicar os estilos corretos com base no tema atual. Por exemplo, no arquivo `Principal.jsx`:

```jsx

import React, { useEffect } from 'react';
import { useTheme } from '../../../ThemeContext';
import './index.scss';
import './indexLight.scss';

const Principal = () => {
  const { isLightMode } = useTheme();

  const headingClassName = isLightMode ? 'h12' : 'h1';

  const setBodyBackground = () => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(isLightMode ? 'light-theme' : 'dark-theme');
  };

  useEffect(() => {
    setBodyBackground();
  }, [isLightMode]);

  return (
    <h1 className={headingClassName}>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
  );
}

export default Principal;

```

Neste exemplo, o componente `Principal` utiliza o hook `useTheme` para obter o valor de `isLightMode`. Com base nesse valor, o componente aplica a classe CSS correta (`'h1'` ou `'h12'`) para o estilo do cabeçalho.

### Arquivos de Estilo

Para aplicar os estilos com base no tema, o aplicativo inclui arquivos de estilo separados para os temas claro e escuro. Por exemplo, em `index.scss`:

```scss

.h1 {
    color: $p-white;
    font-family: $p-Poppins;
    padding-top: 145px;
    padding-left: 64px;
    display: flex;
    justify-content: center;
}

```

E em `indexLight.scss`:

```scss

.h12 {
    color: $p-black-letters;
    font-family: $p-Poppins;
    padding-top: 145px;
    padding-left: 64px;
    display: flex;
    justify-content: center;
}

```

Esses arquivos de estilo contêm os estilos específicos para cada tema e são importados e aplicados dinamicamente nos componentes com base no valor de `isLightMode`.


### Estrutura do Projeto

A estrutura do projeto é organizada em componentes, que são unidades independentes de código responsáveis por renderizar partes específicas da interface. Os principais componentes do projeto são:

- `ToDo` (arquivo `ToDo.js`): O componente principal da aplicação. Ele é responsável por renderizar toda a interface da Lista de Tarefas, gerenciar o estado das tarefas e implementar as funcionalidades de adição, edição e exclusão de tarefas.
- `Header` (arquivo `Header.js`): Componente que renderiza o cabeçalho da página.
- `Principal` (arquivo `Principal.js`): Componente que renderiza o conteúdo principal abaixo do cabeçalho.
- `TaskHeaders` (arquivo `TaskHeaders.js`): Componente que renderiza os cabeçalhos da lista de tarefas.
- `CustomModal` (arquivo `Modal.js`): Componente reutilizável que implementa um modal personalizado para exibir mensagens de confirmação e entrada de dados.

### Criação de Componentes em React

A criação de um componente em React envolve a definição de uma função ou classe que retorna o JSX (JavaScript XML), uma sintaxe semelhante ao HTML que descreve a estrutura e o conteúdo do componente. Aqui está um exemplo de como criar um componente simples:

```jsx
import { Link } from "react-router-dom"
import "./index.scss"

const Header = () => {
  return (
    <div className="header">
        <p className="p1">
          <Link className="link" to={`/organization`}>Organização</Link>
          </p>
        <p className="p2">Tarefas</p>
        </div>
    )
}

export default Header
```

No exemplo acima, estamos criando um componente chamado `Header`. Ele é uma função anônima (`() =>`) que retorna o JSX. O componente é exportado no final do arquivo para que possa ser usado em outros lugares.

Para usar um componente em outro componente ou arquivo, você pode importá-lo e usá-lo como um elemento JSX. Por exemplo:

```jsx
import React from 'react';
import Header from '../../components/Header/Header';

const Todo = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default ToDo;
```

No exemplo acima, importamos o componente `Header` e utilizamos dentro do componente `ToDo`. Dessa forma, quando a lista for renderizada, também será renderizado o componente `Header`.

### Principais Trechos de Código do Projeto

Aqui estão alguns trechos de código importantes do projeto da Lista de Tarefas que você pode destacar em sua documentação:

#### 1. Importação de componentes e recursos:

```jsx
import React, { useState

, useEffect } from 'react';
import './index.scss';
import editIcon from '../../assets/edit.png';
import deleteIcon from '../../assets/delete.png';
import checkboxIcon from '../../assets/checkbox.png';
import checkedIcon from '../../assets/checked.png';
import TaskHeaders from '../../components/TaskHeaders/TaskHeaders';
import CustomModal from '../../components/Modal/Modal';
import Principal from '../../components/Principal/Principal';
import Header from '../../components/Header/Header';
import plusIcon from '../../assets/plus.png';
```

Neste trecho de código, importamos os componentes necessários para o projeto, bem como os recursos (ícones) que serão usados na interface.

#### 2. Definição do estado inicial das tarefas:

```jsx
const [tasks, setTasks] = useState([
  { taskName: 'Limpar a casa', taskStatus: false },
  { taskName: 'Responder e-mails', taskStatus: false },
]);
```

Aqui, estamos usando o hook `useState` para definir o estado inicial das tarefas. O estado é uma variável chamada `tasks`, e a função `setTasks` é usada para atualizar o estado. Inicialmente, as tarefas são definidas como um array de objetos com propriedades `taskName` (nome da tarefa) e `taskStatus` (status da tarefa).

#### 3. Adição de uma nova tarefa:

```jsx
const addTask = () => {
  if (newTask.trim() !== '') {
    const updatedTasks = [
      ...tasks,
      { taskName: newTask, taskStatus: false },
    ];
    setTasks(updatedTasks);
    setNewTask('');
    setShowAddModal(false);
  }
};
```

Esta função `addTask` é chamada quando o usuário deseja adicionar uma nova tarefa. Ela verifica se o campo de entrada `newTask` não está vazio e, em seguida, cria uma nova array de tarefas com a nova tarefa adicionada. A função `setTasks` atualiza o estado das tarefas com a nova array. Além disso, as variáveis `newTask` e `showAddModal` são resetadas para seus valores iniciais.

#### 4. Mudança de status de uma tarefa:

```jsx
const handleTaskStatusChange = (index) => {
  const updatedTasks = [...tasks];
  if (updatedTasks[index]) {
    updatedTasks[index].taskStatus = !updatedTasks[index].taskStatus;
    setTasks(updatedTasks);
  }
};
```

Neste trecho de código, a função `handleTaskStatusChange` é chamada quando o usuário clica no ícone de checkbox para mudar o status de uma tarefa. A função cria uma cópia do array de tarefas usando o operador spread (`[...tasks]`), atualiza o status da tarefa desejada e, em seguida, atualiza o estado das tarefas usando a função `setTasks`.

#### 5. Edição de uma tarefa:

```jsx
const handleEditTask = (index) => {
  setEditingTask(index);
  setSelectedTaskName(tasks[index]?.taskName);
  setConfirmEdit(true);
};
```

Quando o usuário clica no ícone de edição de uma tarefa, a função `handleEditTask` é chamada. Ela define o índice da tarefa sendo editada usando o estado `editingTask`, obtém o nome da tarefa selecionada e exibe um modal de confirmação de edição.

#### 6. Exclusão de uma tarefa

:

```jsx
const handleDeleteTask = (index) => {
  setDeletingTask(index);
  setSelectedTaskName(tasks[index]?.taskName);
  setConfirmDelete(true);
};
```

Ao clicar no ícone de exclusão de uma tarefa, a função `handleDeleteTask` é acionada. Ela define o índice da tarefa a ser excluída usando o estado `deletingTask`, obtém o nome da tarefa selecionada e exibe um modal de confirmação de exclusão.

#### 7. Renderização de componentes:

```jsx
return (
  <>
    <Header />
    <Principal />
    <TaskHeaders />
    <div className="container">
      {/* Renderização das tarefas */}
    </div>
    {/* Modais para edição, confirmação e adição de tarefas */}
  </>
);
```

Este é o retorno do componente `ToDo`. Ele renderiza outros componentes, como `Header`, `Principal` e `TaskHeaders`, e também renderiza as tarefas e os modais para edição, confirmação e adição de tarefas.

## React Router

O React Router é uma biblioteca para lidar com a navegação em aplicativos React. Ele cria rotas para diferentes componentes ou views, permitindo que os usuários naveguem entre as telas sem recarregar a página inteira. Isso proporciona uma experiência de usuário mais suave e semelhante a um aplicativo nativo. O React Router usa os componentes BrowserRouter, Switch e Route para definir e renderizar as rotas. Também oferece o componente Link para criar links de navegação que utilizamos nesse projeto.

Primeiro, importamos os módulos necessários do React Router:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
```

Em seguida, definimos as rotas do aplicativo usando o `createBrowserRouter`. Cada rota é definida como um objeto contendo a propriedade `path` (caminho da rota) e `element` (o componente que deve ser renderizado quando a rota é acessada):

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDo tasks={tasks} />
  },
  {
    path: "/organization",
    element: <Organization />
  },
]);
```

No exemplo acima, temos duas rotas:

- A rota "/" renderiza o componente `ToDo` com a propriedade `tasks` passada como um array de tarefas.
- A rota "/organization" renderiza o componente `Organization`.

Em seguida, renderizamos o componente `RouterProvider` do React Router, envolvendo a raiz do nosso aplicativo:

```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

O componente `RouterProvider` é responsável por fornecer o contexto do React Router para os componentes dentro do aplicativo, permitindo que os componentes acessem informações de rota, como o caminho atual.

Por fim, no componente `Header`, usamos o componente `Link` do React Router para criar um link para a rota "/organization":

```jsx
import { Link } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <p className="p1">
        <Link className="link" to={`/organization`}>Organização</Link>
      </p>
      <p className="p2">Tarefas</p>
    </div>
  );
}

export default Header;
```

No código acima, o componente `Link` é usado para criar um link para a rota "/organization". Quando o link é clicado, o React Router lida com a navegação e renderiza o componente correspondente definido na rota.



Em resumo, o projeto da Lista de Tarefas em React foi uma experiência incrível! Através dele, pude aprofundar meus conhecimentos em React, aprendendo sobre a criação de componentes reutilizáveis, o uso do React Router para gerenciar a navegação entre telas e a estilização com SASS.

Ao longo do projeto, pude compreender como criar componentes funcionais em React, utilizando JSX para renderizar a estrutura da interface. A organização em componentes tornou o código mais simples e facilitou a manutenção e reutilização do código.

A utilização do React Router permitiu criar rotas para diferentes telas, proporcionando uma navegação fluida e sem recarregar a página. Foi interessante utilizar o componente Link para criar links de navegação entre as rotas, proporcionando uma experiência de usuário mais intuitiva.

Além disso, o uso do SASS para estilizar o projeto trouxe flexibilidade e organização ao código CSS. A possibilidade de utilizar variáveis e outros recursos avançados do SASS facilitou a estilização dos componentes e tornou o código mais legível.

No geral, o projeto da Lista de Tarefas em React foi um excelente aprendizado e me deixou preparada para enfrentar novos desafios no desenvolvimento com React. Estou ansiosa para aplicar esses conhecimentos em projetos futuros e aprofundar ainda mais minhas habilidades!

Qualquer dúvida como sempre, não hesite em me perguntar! :smile:
