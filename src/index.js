import React from 'react'
import ReactDOM from 'react-dom'
//é necessário a importação das libs que formos usar dentro do react

//import First from './components/first'
//import GoodMorning from './components/goodMorning'
//importação do objeto, pegando seu retorno e setando no renderizador do react
//o import sempre deve ser feito com a primeira letra maiúscula

//esta forma é usada para importar múltiplos elementos
//import {GoodAfternoon, GoodNight} from './components/multiples'
//esta tecnica é idem a de cima
//import Multi from './components/multiples'

/* ReactDOM.render(
    <div>
        <Multi.GoodAfternoon name="Sérgio" />
        <Multi.GoodNight name="Elismara" />
    </div>,
    document.getElementById('root')) */
//ReactDOM é propriedade que renderiza elementos na tela, dentro do elemento com id referenciado

import HelloWorld from './components/helloWorld'

ReactDOM.render(
    <div>
        <HelloWorld type="text" name="devops" />
    </div>,
    document.getElementById('root')
)