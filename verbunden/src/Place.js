import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

let baseUrl = "http://localhost:8000"

export default function Place() {
    const [place, setPlace] = useState(null)
    let {id} = useParams()
    useEffect(() => {
        fetch(baseUrl + '/favoriteplaces/'+ id, {
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
          setPlace(data.data)
        })
      }, [])
    
    

    
    return ( 
        <>
        {place ? 
            <>
                <Fade bottom>
                <h1>{place.place}</h1>
                <h2>{place.city}</h2>
                <h2>{place.country}</h2>
                <h3>{place.type}</h3>
                <p>{place.latitude}, {place.longitude}</p>
                <img src={place.url} alt="img" className="Image"></img>
                <Link to="/favoriteplaces"><h3>Back to Favorites</h3></Link>
                </Fade>
            </> 
            : null
        }

        </>        
    )

}