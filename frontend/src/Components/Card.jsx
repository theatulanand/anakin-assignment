import React from 'react'

export const Card = ({ name, image, latitude, longitude }) => {
    //console.log(latitude, longitude)
    return (
        <div>
            <img style={{ width: "370px", borderRadius: "10px" }} src={image} alt="" />
            <h2>{name}</h2>
            <p style={{ color: "#696868" }}>{"Latitude : " + latitude}</p>
            <p style={{ color: "#696868" }}>{"Longitude : " + longitude}</p>
        </div>
    )
}
