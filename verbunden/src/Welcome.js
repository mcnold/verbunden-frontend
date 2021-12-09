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
    
            <h1> Welcome, {this.username}.</h1>
           
            </>
        )
    }
}