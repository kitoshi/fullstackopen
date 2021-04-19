import React from 'react';
import Weather from './Weather';

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
                {props.filterItems[0].languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
                <br></br>
                <img src={props.filterItems[0].flag} alt=''/>
                <h2>Weather in {props.filterItems[0].name}</h2>
                <Weather weatherapi={props.weatherapi}/> 
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