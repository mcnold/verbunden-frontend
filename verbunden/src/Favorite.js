import React, {Component} from 'react'
import styled from 'styled-components'
import styles from './Styles'
import NewForm from './NewForm'

let baseUrl = "http://localhost:3000"

export default class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritePlaces: [],
            modalOpen: false,
            favoriteToBeEdited: {},
            url: '',
            place: '',
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
            </>
        )
    }
}