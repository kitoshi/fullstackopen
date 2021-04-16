import React from 'react';


const Filter = (props) => {
    return (
        <div>
            <form>
                find countries: <input value={props.newFilter} onChange={props.handleFilterChange} type='text' />
            </form>
        </div>
    )

}

export default Filter;