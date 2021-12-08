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
    componentDidMount() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.getCurrentPosition(function(position) {
                this.setState = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                console.log("Latitude is: ", position.coords.latitude)
                console.log("Longitude is: ", position.coords.longitude)
            })
            navigator.geolocation.watchPosition(function(position) {
                this.setState = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
        }else{
            console.log("Not Available")
        }
    }
    render() {
        return (
            <div>
                <h4>Your position is {this.latitude}, {this.longitude}</h4>
            </div>
        )
    }
}