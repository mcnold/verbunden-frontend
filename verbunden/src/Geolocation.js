import React, {Component} from 'react'

export default class Geolocation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userLoggedIn : true,
            latitude: '',
            longitude: '',
            isLoading: true

        }
    }

    getGeolocation() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.getCurrentPosition((position)=> {
                const currlat = position.coords.latitude
                const currlong = position.coords.longitude
                this.setState( {
                    latitude: currlat,
                    longitude: currlong
                }, () => {
                    this.setState( {
                        isLoading: false
                    })
                })
                console.log("Latitude is: ", currlat)
                console.log("Longitude is: ", currlong)
            })
            
        
            
        }else{
            console.log("Not Available")
        }



    }
    updateGeolocation() {
        if("geolocation" in navigator) {
            console.log("Available")
            navigator.geolocation.watchPosition((position) => {
                this.setState = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
        }else{
            console.log("Not Available")
        }



    }
    componentDidMount() {
        this.getGeolocation()
        this.updateGeolocation()
    }
    render() {
        console.log(this.state)

        return (
            <div>
                <td onClick={() =>{this.getGeolocation()}}>Find Me</td>
                <td onClick={() =>{this.updateGeolocation()}}>Update My Location</td>
                {
                    this.state.isLoading ? "Loading...":
                    <h4>My position is {this.state.latitude}, {this.state.longitude}</h4>
                }
                
            </div>
        )
    }
}