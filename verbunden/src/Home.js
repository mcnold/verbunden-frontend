import React, {Component} from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: false
        }
    }
    render() {
        return (
            <>
            <h1>verbunden</h1>
            <h2>see the world a little more closely</h2>
            </>
        )
    }
}