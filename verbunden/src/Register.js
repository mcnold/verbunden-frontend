import React, {Component} from 'react'
import './App.css'
import {useNavigate} from 'react-router-dom'

let baseUrl = 'http://localhost:8000'

export default class Register extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            email: '',
            username: '',
            password: '',
            favoritePlaces: [],
            modalOpen: false,
            userLoggedIn: false
        }
    }
    register = async (e) => {
        e.preventDefault()
        const url = baseUrl + '/users/register'
        console.log(e.target.email.value)
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: e.target.email.value,
                    username: e.target.username.value,
                    password: e.target.password.value
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            if (response.status === 200) {
                this.getPlaces()
            }
        }
        catch (err) {
            console.log('Error => ', err)
        }
    }
    render() {
   
    return (
        <>
        <h1>Register</h1>
        <form onSubmit={this.register}>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" name="email"></input>
            <label htmlFor="name">name:</label>
            <input type="text" id="username" name="username"></input>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password"></input>
            <input type="submit" value="register"></input>
        </form>
        </>
    )
}
}