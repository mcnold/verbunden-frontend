import React, {Component} from 'react'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn: true,
        }
    }
    logoutUser = async (e) => {
        this.setState({
            userLoggedIn: false
            
        })
        console.log("user logged out")
    }
    render() {
        return (
            <>
            <h1>See you on your next journey!</h1>
            <button onClick={this.logoutUser}>Log Out</button>
            </>
        )
    }
}