import React from 'react';

const Total = ({ course }) => {
    const reducer = course.parts.reduce( 
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
    )

    return (
        <p>Number of exercises {reducer}</p>
    ) 
}

export default Total
