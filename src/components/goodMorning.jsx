import React, {Fragment} from 'react'

export default props => [
    <h1 key='h1'>Bom dia {props.name}!</h1>,
    <h2 key='h2'>Tudo bem?</h2>
]

// esta usando diretamente o Fragment pq ele esta sendo importado acima
// export default props => // props é uma convenção para propriedades
//     <Fragment>
//         <h1>Bom dia {props.name}!</h1>
//         <h2>Tudo bem?</h2>
//     </Fragment>
//quando a mais de um elemento, é preciso estar dentro de um elemento pai, poderia ser uma div, más para
//más para não renderizar nenhum outro elemento a não ser o h1 e o h2, esta sendo usado o fragment para o
//aceite do framework
//     <div>
//         <h1>Bom dia {props.name}!</h1>
//         <h2>Tudo bem?</h2>
//     </div>