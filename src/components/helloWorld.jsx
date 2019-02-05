import React, {Component} from 'react'

export default class HelloWorld extends Component {
    state = {
        type: "Fala",
        name: "Pedro"
    }

    constructor(props) {
        super(props)

        this.setType = this.setType.bind(this)
    }

    setType(e) {
        this.setState({
            type: e.target.value
        })
    }

    setName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const {type, name} = this.state
        return (
            <div>
                <h1>{type} {name}!</h1>
                <hr/>
                <input type="text" placeholder="Type her" onChange={this.setType} value={type} />
                <input type="text" placeholder="Name her" onChange={e => this.setName(e)} value={name} />
            </div>
        )
    }
}