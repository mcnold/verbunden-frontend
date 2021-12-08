import React, {Component} from 'react'

export default class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            place: '',
            city: '',
            country: '',
            type: '',
            latitude: '',
            longitude: ''
        }
    }

    handleUrlChange = (event) => {
        this.setState({
            url: event.target.value,
        })
    }
    handlePlaceChange = (event) => {
        this.setState({
            place: event.target.value,
        })
    }

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value,
        })
    }

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value,
        })
    }

    handleTypeChange = (event) => {
        this.setState({
            type: event.target.value,
        })
    }

    handleLatChange = (event) => {
        this.setState({
            latitude: event.target.value,
        })
    }

    handleLongChange = (event) => {
        this.setState({
            longitude: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseUrl + '/favoriteplaces', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({place: this.state.place, url: this.state.url}),
            headers: {
                'Content-Type':'application/json'
            },
        }).then(res => {
            return res.json()
        }).then(data => {
            this.props.addPlace(data.data)
            this.setState({
                url: '',
                place: '',
                city: '',
                country: '',
                type: '',
                latitude: '',
                longitude: ''
            })
        }).catch (error => console.error({'Error': error}))
    }

    render() {
        return (
            <>
            <h2>Add a Favorite Place</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="url">Link:</label>
                <input type="url" id="url" onChange={ (e) => this.handleUrlChange(e)} value={this.state.url}/>
                <label htmlFor="place">Place:</label>
                <input type="text" id="place" onChange={ (e) => this.handlePlaceChange(e)} value={this.state.place}/>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" onChange={ (e) => this.handleCityChange(e)} value={this.state.city}/>
                <label htmlFor="country">Country:</label>
                <input type="text" id="country" onChange={ (e) => this.handleCountryChange(e)} value={this.state.country}/>
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" onChange={ (e) => this.handleTypeChange(e)} value={this.state.type}/>
                <label htmlFor="latitude">Latitude:</label>
                <input type="text" id="latitude" onChange={ (e) => this.handleLatChange(e)} value={this.state.latitude}/>
                <label htmlFor="longitude">Longitude:</label>
                <input type="text" id="longitude" onChange={ (e) => this.handleLongChange(e)} value={this.state.longitude}/>
                <input type="submit" value="Add a Favorite Place"></input>
            </form>
            </>
        )
    }
}