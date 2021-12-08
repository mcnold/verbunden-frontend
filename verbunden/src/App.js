import React, {Component} from 'react'
import Register from './Register'
import Login from './Login'
import img from './dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg'
import './App.css'

let baseUrl = 'http://localhost:8000'

export default class App extends Component {
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
    getPlaces = () => {
        fetch(baseUrl + '/favoriteplaces', {
            credentials: 'include'
        })
        .then(res => {
            if(res.status === 200) {
                return res.json()
            } else {
                return []
            }
        }).then(data => {
            console.log(data)
            this.setState({favoriteplaces: data.data})
        })
    }

    loginUser = async (e) => {
        console.log('loginuser')
        e.preventDefault()
        const url = baseUrl + '/users/login'
        const loginBody = {
            email: e.target.email.value,
            username: e.target.username.value,
            password: e.target.password.value
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(loginBody),
                headers: {
                    'Content-Type' : 'application/json'
                },
                credentials: 'include'
            })
            console.log(response)
            console.log("Body: ", response.body)

            if (response.status === 200) {
                response.json().then(
                    body => console.log('Successfully logged in', body),
                this.setState({
                    email: '',
                    username: '',
                    password: '',
                    userLoggedIn: true
                })
            )
            }
        }
        catch (err) {
            console.log('Error => ', err)
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
    logoutUser = async (e) => {
        this.setState({
            userLoggedIn: false
        })
    }
    openRegisterModal = async (e) => {
        this.setState({
            modalOpen:true
        })
    }
    openLoginModal = async (e) => {
        this.setState({
            modalOpen:true
        })
    }

    render() {
        return (
            <div>
 
                <h1>Verbunden</h1>
                <h2>See the world a little more closely.</h2>
        <td onClick={() =>(this.openRegisterModal)}>Register</td>
            <form onSubmit={this.register}>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" name="email"></input>
            <label htmlFor="name">name:</label>
            <input type="text" id="username" name="username"></input>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password"></input>
            <input type="submit" value="register"></input>
        </form>
            

        <td onClick={() =>(this.openLoginModal)}>Login</td>
        <form onSubmit={this.loginUser}>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" name="email"></input>
            <label htmlFor="name">name:</label>
            <input type="text" id="username" name="username"></input>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password"></input>
            <input type="submit" value="login"></input>
        </form>
            </div>
        )
    }
}