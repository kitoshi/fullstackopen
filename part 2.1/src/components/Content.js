import React from 'react';
import Part from './Part'

const Content = ({ courses }) => {
    return (
        <div>
        {courses.parts.map(part => <Part key={part.name} part={part}/>)}
        </div>
    )
}

export default Content