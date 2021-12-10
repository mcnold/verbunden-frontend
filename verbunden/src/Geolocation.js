import React, {Component} from 'react'

export default class Geolocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn : true,
            latitude: '',
            longitude: ''

        }
    }

    getGeolocation() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.getCurrentPosition = (position)=> {
                this.setState = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                console.log("Latitude is: ", position.coords.latitude)
                console.log("Longitude is: ", position.coords.longitude)
            }
        }else{
            console.log("Not Available")
        }



    }
    updateGeolocation() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.watchPosition = (position) => {
                this.setState = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            }
        }else{
            console.log("Not Available")
        }



    }
    componentDidMount() {
        this.getGeolocation()
        this.updateGeolocation()
    }
    render() {
        return (
            <div>
                <td onClick={() =>{this.getGeolocation()}}>Find Me</td>
                <td onClick={() =>{this.updateGeolocation()}}>Update My Location</td>
                <h4>My position is {this.state.latitude}, {this.state.longitude}</h4>
            </div>
        )
    }
}