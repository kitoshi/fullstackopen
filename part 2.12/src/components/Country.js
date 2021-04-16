import React from 'react';


const Country = (props) => {

    if (props.filterItems.length > 10) {
        return (
            <>
                Too Many matches, specify another filter
            </>
        )
    }
    if (props.filterItems.length === 1)
    {
        return (
            <>
                {props.singleItem} 
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