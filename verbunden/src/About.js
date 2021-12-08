import React, {Component} from 'react'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn : true
        }
    }
    render() {
        return (
            <>
            <h1>We understand you want to see the world, but what happens when you get there?</h1>
            <p>
                Verbunden is a travel concierge service that lets you connect with local
                guides virtually at any time. Get local secrets, the tips on best spots,
                and everything you would want with a local tour guide on demand through
                our application.
            </p>
            </>
        )
    }
}