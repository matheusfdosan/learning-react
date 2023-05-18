# React JS

O **React.js** é uma biblioteca que utiliza JavaScritpt, com o objetivo de criar interfaces. Uma ferramenta criada pelo Facebook e 2011. Ele é utilizado para construir SPAs (Single Page Aplications), o que significa que, se utiliza uma página index, para rodar toda a aplicação. Além de, ser baseado em componentes, elementos na interface, que, podemos utilizar e reutilizar, em diversas partes do código.

Em seus arquivos, utiliza-se a extensão `JSX` para renderizar HTML e, permite que você misture código JavaScript com sintaxe de HTML. E aplica o **Virtual DOM** para renderizar as alterações de DOM, ou seja, o Virtual DOM ajuda a otimizar o desempenho da aplicação, atualizando apenas as partes do DOM que foram modificadas, em vez de redesenhar toda a página.

## Instalando o React

Para instalar o React, vamos utilizar a ferramenta **Create React App**, é a ferramenta mais indicada para iniciar um projeto com React.

Logo, temos a página da ferramenta *https://create-react-app.dev/*, aqui teremos o acesso à documentação, com a lista de passos para iniciar o projeto React: Primeiramente, no terminal, escrevemos `npx create-react-app my-app`, o `npx` é baseado no `npm`, entretanto, o `npx` executa um script - que é o `create-react-app` - dentro de uma pasta, `my-app`. Também pode ser usado o comando `npx create-react-app .`, esse ponto no final, quer dizer que o React iniciará dentro da pasta atual.

## Entendendo o React

Após a instalação, vamos ter:

- Um arquivo _README.md_, que vem com uma explicação sobre o _Create React APP_.
- Tem um arquivo _package.json_, é o arquivo que lista todas as dependências e comandos de terminal, usadas no projeto.
- O arquivo _package-lock.json_ que, assim como o _package.json_, gerencia dependências do projeto.
- _.gitignore_, terá a lista de arquivos e pastas que será ignorado na hora de fazer um push em um repositório, como o _node_modules_.
- O _node_modules_ é onde fica todas as dependências do projeto, entretanto, o React precisa de todas essas dependências para funcionar.
- A pasta _PUBLIC_:
  - Nela, terá alguns arquivos, mas principalmente, terá o **index.html**, que é um ponto de partida, é o arquivo que o navegador vai abrir para a exibição de todo o conteúdo React, mais especificadamente, o React vai trabalhar em cima de uma única \<div> com um id `root`, ou raiz. Esse arquivo tem a função de servir como SPA (Single Page Aplication).
- Já na pasta _SRC_:
  - É a pasta em que mais vamos trabalhar.
  - Logo, teremos um arquivo chamado `index.js`, nele, basicamente, haverá comandos que, transformam a `div#root` do HTML, em um projetor de todos componentes React.
  - E também temos o arquivo de estilização, o `index.css`, que é importado no index.js, para, obviamente, estiliza-lo.
  - Nesta pasta, temos também o arquivo, `App.js`, que é um [componente](#componentes), que é exportado, para ser importado pelo `index.js`, e ser colocado dentro da Root, em forma de tag `<App />`.

## Componentes

O componente serve como um divisor, ele divide a aplicação em partes, podendo ser reutilizadas em outras partes do código.

Para iniciar um componente, primeiramente, criaremos um arquivo com o nome do componente, exemplo, `Header.jsx`. A extensão do arquivo pode ser JSX ou JS, não há muita diferença. Além disso, todos os componentes devem estar dentro de uma pasta chamada **components**.

No arquivo, devemos importar as funcionalidades do React para dentro do arquivo, com os seguintes códigos:

```jsx
import React from "react"
```

Depois iniciaremos uma função, pois os componentes são basicamente funções JavaScript:

```jsx
function Header() {}
```

Dentro da função podemos criar o nosso componente Header utilizando as [funcionalidades do JSX](#funcionalidades-do-jsx).

E por fim, depois da função, exportaremos o componente:

```jsx
export default Header
```

## Funcionalidades do JSX

O **JSX** é como um HTML, porém, está dentro do código JavaScript. Logo, nele podemos **interpolar variáveis**, inserindo ela entre chaves {}. E é possível inserir **valores em atributos** de tags em JSX.

Dentro da função podemos escrever comandos padrões do JavaScript, como declarar uma variável, objeto, array, função, etc. E no final, retornar apenas um elemento HTML:

```jsx
function Header() {
  const logo =
    "https://www.freepnglogos.com/uploads/new-balance-png-logo/red-new-icon-png-logo-33.png"

  function navigation() {
    const navigationArr = ["Home", "Shop", "Contact", "About"]

    return navigationArr.map((element) => {
      return <li>{element}</li>
    })
  }
}
```

Nesse componente, criamos uma variável _logo_, que guarda um link para a imagem da logo do site. E criamos uma função _navigation_, que cria uma sequência de item de navegação para o site.

Agora criaremos os items visuais do componente, utilizando os dados acima:

```jsx
function Header() {
  ...

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <ul>{navigation()}</ul>
      </nav>
    </header>
  )
}
```

Vemos que, retornamos elementos HTML, logo, eles estão dentro de apenas um elemento, esse elemento é chamado de **wrapper**, ele pode ser uma tag que guarda outras tags, ou um fragmento: `<>...</>`.

Dentro da tag header, temos dois elementos, o primeiro é uma _div_, com a classe `logo`, a maneira que o atributo foi escrito é diferente, pois no HTML normal, escreveríamos `class`, mas o _class_ já é uma palavra reservada no JavaScript, por isso escrevemos `className`. No interior dessa mesma tag, temos a tag \<img>, e observamos a maneira de interpolar variáveis, `src={imageLink}`.

Contudo, temos também, uma tag \<nav> que guarda uma tag \<ul>, para listar itens, dentro dessa tag, temos uma interpolação de uma função, `navigation()`, essa função percorre um array, com uma lista dos links de navegação da página, e retorna uma \<li> com cada link dessa lista.

## Trabalhando com PROPS

As **props** são valores passados para componentes, isso deixa os componentes dinâmicos, ou seja, mudando a execução por conta do valor da prop. O valor é passado como atributo na chamada do componente, e precisa ser resgatado como parâmetro da função de definição do componente, com o nome de _props_. Todavia, as _props_ não podem ser modificadas, elas são apenas recebidas e utilizadas.

Por exemplo, imagine que você tenha um componente chamado `Greeting()` que recebe uma prop chamada name. A chamada desse componente seria algo assim:

```jsx
<Greeting name="John Doe" />
```

E a definição do componente seria assim:

```jsx
function Greeting(props) {
  return <div>Hello, {props.name}!</div>
}
```

Nesse exemplo, a prop name é passada como um atributo na chamada do componente Greeting. Dentro da função Greeting, a prop é acessada através do objeto props passado como parâmetro. O valor da prop é então interpolado na string "Hello, {props.name}!" usando chaves {}.

### Definindo PROPS

Podemos definir tipos para as _props_, realizando uma espécie de **validação**, nós definimos em um objeto chamado `propTypes` no próprio componente, e ainda há a possíbilidade de definir um valor padrão, neste caso utilizamos o objeto `defaultProps`.

Podemos definir o tipo primitivo de cada _prop_, como string, number, object, etc. Logo, para fazer isso temos que importar uma funcionalidade do React, o **PropTypes**:

```jsx
import PropTypes from "prop-types"
```

Depois aplicaremos as _props_ ao componente, normalmente:

```jsx
function ItemList({ name, age }) {
  return (
    <li>
      {name}, {age}
    </li>
  )
}
```

O segredo para filtrar tipos está no código a seguir:

```jsx
ItemList.propTypes = {
  // Definimos um "filtro" para o ItemList.
  name: PropTypes.string,
  // Esta propriedade tem um filtro que apenas valores do tipo primitivo string são aceitos
  age: PropTypes.number.isRequired,
  // O isRequired, alerta um erro no console quando o valor da prop não passar no filtro
}
```

Logo, também podemos definir um valor padrão para cada _prop_:

```jsx
ItemList.defaultProps = {
  name: "No name",
  age: "No age",
}
```

> Entretanto, definido um valor padrão para as props, não será mais necessário usar o método _isRequired_.

## CSS Modules

Agora, vamos ver como adicionar CSS no projeto. O CSS pode ser adicionado de forma global com apenas um arquivo, por exemplo, podemos usar um único arquivo para estilizar vários componentes. Mas também é possível estilizar cada componente com um arquivo .css indivídual.

Basta criar um arquivo como: `Componente.module.css`, contudo, os seletores de classes não podem ter traço, `meu-componente` por exemplo, você deve usar CamelCase `meuComponente`, ou SnakeCase `meu_componente`.

```css
.myButton {
  background-color: #333;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  color: #fff;
}
```

Para importar esses estilos no arquivo do componente, escrevemos `import styles from "path/myButton.module.css"`. O `styles` vai ter um funcionamento semelhante ao das _props_, é um objeto com guarda todos os seletores em propriedades de objeto, e importa-lo no componente: `import styles from "./myButton.module.css";`.

E por fim, devemos colocar cada estilo para cada elemento, basta, no elemento, colocar como atributo o `className={...}`, e usar as propriedades do objetos `styles` como se fosse classes: `<div className={styles.divStyle}>...</div>`.

Exemplo:

```jsx
import styles from "./myButton.module.css"

function Button() {
  return (
    <>
      <button className={styles.myButton}>Click me</button>
    </>
  )
}
```

## React Fragments

Os React Fragments permite a criação de um componente sem elemento pai, com o propósito de descomplicar os nós do DOM.

A sintaxe é essa: `<>` e `</>`, não há um nome para a tag, e criamos no próprio JSX, veja:

```jsx
function Component() {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>React Fragments</p>
    </>
  )
}
```

Além de utilizar a sintaxe acima, também é possível usar a tag `<React.Fragment>` para criar os fragments.

## Eventos

Os eventos do React são os mesmos dos eventos DOM, ou seja, temos eventos como click, change, submit e etc. O evento é atrelado a uma tag, como um atributo, que irá executar uma função, por exemplo: `<button onClick={clickBtn}>Click</button>`. Logo o método deve ser criado no próprio arquivo do componente. A ação do evento é guardada dentro de uma função.

### Exemplo:

Tenho um botão, quando o usuário clicar nesse botão, irá mostrar uma mensagem no console.

```jsx
export default function ComponenteBotão() {
  return <button onClick={clicou}>Botão</button>
}
```

É dessa forma que atrelamos um evento a um elemento, logo, quando o usuário clicar nesse botão, executará a função `clicou`, que pode ser declarada em qualquer lugar do código:

```jsx
function clicou() {
  console.log("Você clicou no botão")
}
```

### Outro Exemplo:

Tenho um formulário de cadastro, quando o usuário enviar (submit) esse furmulário, vai aparecer uma mensagem de cadastro finalizado:

```jsx
export default function SignUp() {
  function registered(event) {
    // quando o  usuário enviar o furmulário, aparecerá uma mensagem de cadastro finalizado
    console.log("Você está cadastrado!")
  }

  return (
    // formulário de cadastro
    <form method="post" onSubmit={registered}>
      ...
    </form>
  )
}
```
