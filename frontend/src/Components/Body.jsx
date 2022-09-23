import React from 'react'
import data from '../data.json'
import { Card } from './Card'
export const Body = () => {
    return (
        <div id="cardDiv">
            {
                data.map((el) => (
                    <Card key={el.uuid} name={el.places[0].name} image={el.places[0].photoHref} latitude={el.places[0].location.latitude} longitude={el.places[0].location.longitude} />
                ))
            }
        </div>

    )
}
