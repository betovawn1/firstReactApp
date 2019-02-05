import React from 'react'

const GoodAfternoon = props => <h1>Good Afternoon {props.name}!</h1>
//export default no caso não aceita variáveis nem constantes
const GoodNight = props => <h1>Good Night {props.name}!</h1>
//ou export direto
//export const GoodNight = props => <h1>Good Night {props.name}!</h1>

//também pode ser exportado ambos ou apenas como default
export { GoodAfternoon, GoodNight }
export default { GoodAfternoon, GoodNight }