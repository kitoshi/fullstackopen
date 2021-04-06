import React from 'react';

const Total = ({ courses }) => {
    const reducer = courses.parts.reduce( 
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
    )

    return (
        <p>Number of exercises {reducer}</p>
    ) 
}

export default Total
