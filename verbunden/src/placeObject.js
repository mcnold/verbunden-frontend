import React, { Component } from 'react'


export default class placeObject extends Component {

render () {
    return(
        <>
        <h2>{this.props.placeName}</h2>
        
        <div>
        <h4>Name: {this.props.placeObject.data.name}</h4>
        <p>Category: {this.props.placeObject.data.category}</p>
        <p>24 Hr Vol: {this.props.placeObject.data.rank}</p>
        <p>24 Hr Change: {this.props.placeObject.data.tags}</p>
        </div>
        </>
    )

}
}