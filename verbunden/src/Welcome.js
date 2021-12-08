import React, {Component} from 'react'
import img from './lilartsy-xqC7hdLMpgk-unsplash.jpg'

export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
        }
    }

    render() {
        return(
            <>
            img src={img}
            <h1> Welcome, {this.state.username}.</h1>

            </>
        )
    }
}