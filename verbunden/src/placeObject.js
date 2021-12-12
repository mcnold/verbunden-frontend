import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

export default class placeObject extends Component {

render () {
    return(
        <>
        <Slide left>
        <h2>{this.props.placeName}</h2>
        </Slide>
        <div>
        <Slide right>
        <h4>Name: {this.props.placeObject.data.name}</h4>
        <p>Category: {this.props.placeObject.data.category}</p>
        <p>24 Hr Vol: {this.props.placeObject.data.rank}</p>
        <p>24 Hr Change: {this.props.placeObject.data.tags}</p>
        </Slide>
        </div>
        </>
    )

}
}