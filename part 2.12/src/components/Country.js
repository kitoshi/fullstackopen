import React from 'react';


const Country = (props) => {

    if (props.filterItems.length > 10) {
        return (
            <>
                Too Many matches, specify another filter
            </>
        )
    }
    if (props.filterItems.length === 1) {
        return (
            <>
                <h2>{props.filterItems[0].name}</h2>
                  Capital: {props.filterItems[0].capital}
                  <br></br>
                  Population: {props.filterItems[0].population}
                <h2>Languages</h2>
                <li></li>
            </>
        )
    }
    else
    return (
        <>
        {props.filterItems.map(props.filterList)} 
        </>
    )

}


export default Country;