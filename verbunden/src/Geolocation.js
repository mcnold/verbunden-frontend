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
    }
    render() {
        return (
            <div>
                <td onClick={() =>{this.getGeolocation()}}>Find Me</td>
                <h4>Your position is {this.latitude}, {this.longitude}</h4>
            </div>
        )
    }
}