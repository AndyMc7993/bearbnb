import React  from 'react';
import Card from './Card';
import Data from './PropData'

export default function Properties(){

    const propertyCards = Data.map(item => {
            return <Card
                    item={item}
                    />
        })
    
        return(
            <section className="properties-container">
                        {propertyCards}
            </section>
        )
    }