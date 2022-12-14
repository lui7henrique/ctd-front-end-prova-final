# ctd-esp-front2-final

Examen Final de Frontend V

## Indice

- [Requisitos](#requisitos)
  - [Condições mínimas de aprovação](#condições-mínimas-de-aprovação)
  - [Aspectos que modificam a avaliação final da nota](#aspectos-que-modificam-a-avaliação-final-da-nota)
- [Funcionalidades](#funcionalidades)
  - [Funcionalidades obrigatorias](#funcionalidades-obrigatorias)
- [Desenvolvimento](#desenvolvimento)
  - [Iniciando o App](#iniciando-o-app)
  - [Dependencias](#dependencias)
  - [Dependencias de Desenvolvimento](#dependencias-de-desenvolvimento)
- [Entrega](#entrega)
  - [Data de Entrega](#data-de-entrega)
  - [Formato de Entrega](#formato-de-entrega)
- [Guia para começar](#guia-para-começar)
  - [Paso 0 - Instalação](#passo-0---instalação)
  - [Paso 1 - Criação de Custom Render](#passo-1---criação-de-custom-render)
  - [Paso 2 - Escrever os testes do componente Quote.tsx](#passo-2---escrever-os-testes-do-componente-quote.tsx)
  - [Paso 3 - Styled Components](#passo-3---styled-components)
  - [Paso 4 - Noticias](#passo-4---noticias)

## Requisitos

É essencial fazer um Fork deste projeto, para poder trabalhar _individualmente_. Projetos que tenham sido realizados sem partir deste modelo não serão aceitos.

### Condições mínimas de aprovação

As seguintes condições são requisitos mínimos necessários para a aprovação final:

    * Conformidade com todos os recursos obrigatórios
    * O projeto deve ser realizado com base no modelo entregue. Não serão aceitos projetos que tenham sido realizados sem respeitar tal requisito.
    * Somente as bibliotecas detalhadas neste documento e/ou o arquivo README encontrado no repositório podem ser utilizadas.
    * Qualquer funcionalidade implementada usando uma biblioteca diferente das permitidas não será considerada implementada.
    * O projeto deve ser desenvolvido utilizando TypeScript como linguagem.
    * Você deve ter testes unitários escritos para a primeira seção, conforme indicado na questão número 1. Para isso, deve-se usar Jest e React Testing Library. Além disso, MSW ou alguma outra biblioteca deve ser usada para interceptar solicitações e simular uma resposta.
    * Espera-se que o projeto tenha coverage de pelo menos 50% como condição mínima de aprovação.
    * Nos casos em que é necessário atribuir estilos aos componentes, deve-se fazê-lo utilizando a biblioteca Styled Components. Estilos dinâmicos também devem ser tratados por esta biblioteca.
    * Espera-se que eles possam aplicar pelo menos 1 princípio SOLID para resolver o primeiro problema, explicando em um comentário em qual parte do código podemos ver tal aplicação.

### Aspectos que modificam a avaliação final da nota

Os seguintes aspetos são extras ao requisito mínimo de aprovação que serão tidos em conta para aumentar a nota final, desde que a sua implementação seja correta:

    TypeScript
      * Será levado em consideração o uso do Typescript além da tipagem de props de componentes, principalmente no caso de funções que desenvolvem lógicas, actions e reducers reutilizáveis.
      * Será valorizada a reutilização de tipos comuns que se repetem ao longo do projeto, principalmente através da reutilização de interfaces.

    Documentação
      * Será valorizado o uso correto da documentação em todas as funções e componentes.

    Validações
      * Será valorizada a adição de validações de fluxos alternativos ao normal e o tratamento de erros nas diferentes funcionalidades implementadas.

    Testing unitario e coverage
      * Será valorizado o uso correto dos testes unitários e o aumento do percentual de cobertura do código (coverage) além de 50%.

    Boas práticas
      * Especial atenção será dada ao uso de boas práticas, reutilização de componentes e funcionalidades comuns e renderização dinâmica.

## Funcionalidades

### Funcionalidades obligatorias

As seguintes funcionalidades são requisitos mínimos necessários para a aprovação da final e é fundamental que funcionem corretamente.

### _Seção 1: Citas dos Simpsons._

    Nesta seção, o usuário tem a possibilidade de obter citações de Os Simpsons. Existem duas maneiras:

    - Primeiro, clicando no botão correspondente sem inserir nenhum nome na entrada. Isso retorna uma citação aleatória.
    - Segundo, se o nome de um personagem for inserido antes de pressionar o botão, a API retornará uma citação desse caractere.

    Por outro lado, se um valor numérico for inserido, uma mensagem de erro será exibida. A funcionalidade é implementada com o Redux Toolkit usando thunk para a solicitação da API.

    Você precisará escrever os testes nesta seção. Para fazer isso você deve:

    * Crie uma renderização personalizada adicionando o provider Redux para poder acionar as actions.
    * Use MSW ou alguma outra biblioteca para interceptar request e mockear uma resposta. Mockear o método fetch não é permitido.
    * Desenvolver testes de integração no componente “Quotes”, avaliando os diferentes casos de teste que contemplam os diferentes fluxos de comportamento.

    O código base para esta seção está localizado em src/features/quotes. Lá você encontrará o componente e outros utilitários a serem levados em consideração ao escrever os testes.

### _Seção 2: Bio._

    Esta parte apresenta uma seção que possui um painel de botões que permite alternar entre a biografia de cada personagem. Neste caso, o que queremos é fazer o layout da seção usando Styled Components.

    Além disso, no caso de botões, é necessário aplicar estilos baseados em props para destacar o botão do personagem cuja biografia está sendo exibida na tela.

    O código base para trabalhar nesta seção está em src/features/bio. O componente está funcionando conforme o esperado, portanto, é importante verificar se essa funcionalidade não foi afetada após a refatoração.

### _Seção 3: Noticias._

    Esta seção apresenta uma lista de notícias sobre Os Simpsons. Cada notícia tem um prop premium que determina se o usuário pode acessá-la ou não.

    Se puder, clicar no botão “Ver mais” abre um modal com o detalhamento completo da notícia.
    Caso contrário, um modal é aberto convidando o usuário a se inscrever.

    O código base para esta seção está localizado dentro da pasta src/features/news. Lá você encontrará o arquivo News.jsx, dentro do qual você pode ver que existem vários componentes e funções que executam tarefas nas informações. Nesse caso, o requisito é refatorar o código aplicando os princípios e boas práticas que vimos ao longo do curso. Em particular, espera-se que você seja capaz de aplicar os princípios SOLID durante o processo de refatoração. Para isso, é permitido criar novos arquivos dentro da pasta “news”, caso considere necessário extrair determinada lógica do código. No entanto, deve-se observar que você deve trabalhar apenas no arquivo News.jsx. O conteúdo dos arquivos fakeRest.ts e styled.ts não deve ser modificado, pois isso não faz parte do comando.

## Desenvolvimento

### Iniciando o App

Instalado as dependências

`npm install`

Podemos iniciar nossa aplicação com o comando

`npm run start`

### Dependencias

A versão 18.1.0 do React será usada, juntamente com a versão 5 do React Scripts.

Apenas as seguintes dependências podem ser instaladas:

- Redux (incluida @reduxjs/toolkit)
- Typescript
- Thunk
- Styled Components
- Jest
- React Testing Library

### Dependencias de Desenvolvimento

Para resolver a questão número 1, MSW ou uma biblioteca equivalente deve ser usada para interceptar as solicitações à API e poder retornar uma resposta.

As seguintes dependências de desenvolvimento adicionais (devDependencies) podem ser usadas, mas elas _não_ modificarão a nota de forma positiva, nem são requisitos para aprovação. A possibilidade de usá-los é oferecida apenas para quem sabe o que está fazendo e se sente confortável com eles.

- Redux Devtools Extension
  - Esta ferramenta foi utilizada em aula, para visualizar o estado do Redux. Pode ser útil depurar e corrigir alguns problemas em nosso código.
    -ESLint
  - Esta ferramenta NÃO foi usada em aula, e será vista no Frontend V. Mas se você se sentir confortável em usá-la, a configuração eslint é permitida.

## Entrega

### Data de Entrega

Somente serão aceitas entregas recebidas até o encerramento da aula 24, aula de Avaliação Final.

### Formato de Entrega

A entrega será aceita mediante o envio da URL de um repositório privado do Github, que tenha acesso compartilhado às seguintes contas:

- Camada 1 - Profesor: ??? - Conta do Github [@???](https://github.com/)
- Camada 2 - Profesor: ??? - Conta do Github [@???](https://github.com/)

O link do Formulário Google para submissão será enviado pelo professor responsável pela comissão.

## Guia para começar

Agora que vimos quais são os requisitos e funcionalidades que você deve realizar neste projeto, passaremos pelos principais passos a seguir para concluir o desenvolvimento de sua aplicação.

### Passo 0 - Instalação

Instalar MSW (se você for usar outra biblioteca, você pode pular esta etapa)

`npm install msw --save-dev`

### Paso 1 - Creação de custom render

O primeiro passo para poder escrever e executar nossos testes corretamente é criar um render customizado que nos permita "empacotar" os componentes que vamos testar dentro do provedor Redux. Para fazer isso, vamos criar um arquivo test-utils.tsx dentro da pasta _src_. Dentro dele, importamos as dependências e criamos o render customizado:

```test-utils.tsx
// Importamos as dependências que vamos usar
import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteReducer from "./features/quote/quoteSlice";
import { RootState } from "./app/store";

// Criamos o custom render
const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        quote: quoteReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: {
    preloadedState?: RootState;
    store?: ReturnType<typeof configureStore>;
  } = {}
) => {
  const Wrapper: React.FC<{
    children: React.ReactNode;
  }> = ({ children }) => <Provider store={store}>{children}</Provider>;

  render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

// re-exportamos todo
export * from "@testing-library/react";

// sobrescrevemos o método render.
export { customRender as render };

```

### Passo 2 - Escrever os testes do componente Quote.tsx

Para resolver o primeiro passo, você precisará ir para a pasta _src/features/quote_ e criar um novo arquivo _Quote.test.tsx_ lá.

Dentro dele, o primeiro passo será criar o mock da API usando o MSW ou a biblioteca que você decidiu usar.
Em seguida, você pode começar a escrever os _test cases_ para o componente. Para isso, leve em consideração os diferentes cenários possíveis que podem ocorrer no componente, avaliando não apenas o “caminho feliz”, mas também os fluxos alternativos.

**Importante**
Lembre-se de avaliar o nível de cobertura de seus testes, pois para passar neste tarefa você deve ter pelo menos 50%. Para fazer isso, você pode adicionar o sinalizador _--coverage_ ao executar o teste.

### Passo 3 - Styled Components

Para resolver o segundo passo, você deve se localizar na pasta _src/features/bio_. Lá, criaremos um arquivo _styled.ts_, dentro do qual estarão os componentes que você precisará criar usando **Styled Components**.

Os estilos de cada componente, você pode obtê-los no arquivo _styles.modules.css_ que está dentro da pasta.

Lembre-se que um ponto importante do slogan é adicionar estilos dinâmicos aos botões, para poder identificar o personagem que está ativo.
Para fazer isso, você pode usar o valor da variável _bioActive_ encontrada dentro do componente **Bio**

**Importante**
Esta seção está funcionando corretamente no código base. É importante verificar o comportamento atual antes de proceder à refatoração, para que uma vez que a declaração tenha sido feita, você possa testar se a seção continua se comportando da mesma forma.

### Passo 4 - Noticias

Dentro da pasta _src/features/news_, encontraremos o arquivo _News.tsx_. Lá, você encontrará toda a lógica desta seção.
Para resolver este problema, é importante poder abstrair-nos um pouco da criação da UI, e do HTML, para pensar em quais funcionalidades podem ser generalizadas e extraídas do componente.
em particular. Por exemplo, uma função que adiciona letras maiúsculas a uma string é algo que pode ser usado em qualquer lugar (não apenas neste componente), então uma função utilitária pode ser criada para realizar esta tarefa sempre que for necessário.
Lembre-se também do que você aprendeu sobre os vários princípios do SOLID ao pensar nas oportunidades de refatoração apresentadas a nós neste caso.

Boa sorte e sucesso!
