import React, {Component} from 'react'
import styled from 'styled-components'
import styles from './Styles'
import NewForm from './NewForm'
import Geolocation from './Geolocation'

let baseUrl = "http://localhost:8000"

export default class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritePlaces: [],
            modalOpen: false,
            favoriteToBeEdited: {},
            url: '',
            place: '',
            city: '',
            country: '',
            type: '',
            latitude: '',
            longitude: '',
            userLoggedIn: true

        }
    }
    getFavoritePlaces = () => {
        fetch(baseUrl + '/favoriteplaces/', {
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
          this.setState({favoritePlaces: data.data})
        })
      }
    addFavoritePlaces = (newFavoritePlace) => {
        const copyFavoritePlaces = [...this.state.favoritePlaces]
        copyFavoritePlaces.push(newFavoritePlace)
        this.setState({
            favoritePlaces: copyFavoritePlaces
        })
    }
    deleteFavoritePlace = (id) => {
        fetch(baseUrl + '/favoriteplaces/' +id, {
            method: 'DELETE'
        }).then( res => {
            const findIndex = this.state.favoritePlaces.findIndex(favoritePlaces => favoritePlaces._id ===id)
            const copyFavoritePlaces = [...this.state.favoritePlaces]
            copyFavoritePlaces.splice(findIndex, 1)
            this.setState({
                favoritePlaces: copyFavoritePlaces
            })
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const url = baseUrl + "/favoriteplaces/" + this.state.favoriteToBeEdited._id
        try{
            const response = await fetch ( url, {
                method: 'PUT',
                body: JSON.stringify({
                    url: e.target.url.value,
                    place: e.target.place.value,
                    city: e.target.city.value,
                    country: e.target.country.value,
                    type: e.target.type.value,
                    latitude: e.target.latitude.value,
                    longitude: e.target.longitude.value

                }),
                headers: {
                    'Content-Type' : 'application/json'
                },
            })

            if (response.status === 200) {
                const updatedFavoritePlace = await response.json()
                const findIndex = this.state.favoritePlaces.findIndex(favoritePlaces => favoritePlaces._id === updatedFavoritePlace._id)
                const copyFavoritePlaces = [...this.state.favoritePlaces]
                copyFavoritePlaces[findIndex] = updatedFavoritePlace
                this.setState({
                    favoritePlaces: copyFavoritePlaces,
                    modalOpen: false
                })
            }
        }
        catch(err) {
            console.log('Error => ', err)
        }
    }

    handleChange = (e) => {
        this.setState( {
            [e.target.name]: e.target.value
        })
    }

    showEditForm = (favoritePlaces) => {
        this.setState({
            modalOpen: true,
            url: favoritePlaces.url,
            place: favoritePlaces.place,
            city: favoritePlaces.city,
            country: favoritePlaces.country,
            type: favoritePlaces.type,
            latitude: favoritePlaces.latitude,
            longitude: favoritePlaces.longitude,
            favoriteToBeEdited: favoritePlaces
        })
    }
    componentDidMount() {
        this.getFavoritePlaces()
    }
    render() {
        
        return (
            <>
            <h1>My Favorite Places</h1>
            <NewForm baseUrl={baseUrl} addFavoritePlaces={this.addFavoritePlaces}/>
            {/* <Geolocation/> */}
            <table>
                <tbody>
                    {this.state.favoritePlaces.map((favoriteplace) => {
                        return (
                            <tr key={favoriteplace._id}>
                                <td>{favoriteplace.place}</td>
                                <td onClick={() =>{this.showEditForm(favoriteplace)}}>Edit</td>
                                <td onClick={() => this.deleteFavoritePlace(favoriteplace._id)}>X</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {
                this.state.modalOpen &&
                <form onSubmit={this.handleSubmit}>
                    <label>Url:</label>
                    <input name="url" value={this.state.url} onChange={this.handleChange}/><br/>
                    <label>Place:</label>
                    <input name="place" value={this.state.place} onChange={this.handleChange}/><br/>
                    <label>City:</label>
                    <input name="city" value={this.state.city} onChange={this.handleChange}/><br/>
                    <label>Country:</label>
                    <input name="country" value={this.state.country} onChange={this.handleChange}/><br/>
                    <label>Type:</label>
                    <input name="type" value={this.state.type} onChange={this.handleChange}/><br/>
                    <label>Url:</label>
                    <input name="latitude" value={this.state.latitude} onChange={this.handleChange}/><br/>
                    <label>Url:</label>
                    <input name="longitude" value={this.state.longitude} onChange={this.handleChange}/><br/>

                </form>
            }
            </>
        )
    }
}