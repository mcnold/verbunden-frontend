import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Welcome from './Welcome'
import Favorite from './Favorite'
import About from './About'
import LogOut from './LogOut'

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

    render() {
        return (
            <Router>
                <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users/register">Register</Link>
                <Link to="/users/login">Login</Link>
                <Link to="/favoriteplaces">Favorite Places</Link>
                <Link to="/logout">LogOut</Link>
                </nav>
                <Routes>
                    <Route path="/"element={<Home/>}/>
                    <Route path="/welcome" element={<Welcome/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/users/register" element={<Register/>}/>
                    <Route path="users/login" element={<Login/>}/>
                    <Route path="favoriteplaces" element={<Favorite/>}/>
                    <Route path="/logout" element={<LogOut/>}/>
                </Routes>

            </Router>
            
                

            
           
            
        )
    }
}