import React, {Component} from 'react'
export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
            username: ''
        }
    }
    
    
    render() {
        return(
            <>
    
            <h1> Welcome, {this.props.username}.</h1>
            <h2>What would you like to do today?</h2>
           
            </>
        )
    }
}