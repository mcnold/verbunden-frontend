import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'

const mapStyles = {
    width: '100%',
    height: '100%'
}

export default class Map extends Component {
    constructor(Props) {
        super(props)
        this.state = {
            favoritePlaces: [],
            userLoggedIn: true,
            latitude: '',
            longitude: '',
        }

    }
    render() {
        return (
            <>
            <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            latitude: this.latitude,
            longitude: this.longitude
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          favoritePlace={favoritePlace.place}
        />
        </Map>
            </>
        )
    }
}