import React, {Component} from 'react'
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
    
            <h1> Welcome, {this.props.username}.</h1>
           
            </>
        )
    }
}