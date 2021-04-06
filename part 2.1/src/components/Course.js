import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courses}) => {
  console.log(courses)

    return (
    <div>
      <Header key={courses.name} courses={courses}/>
      <Content key={courses.parts.name} courses={courses}/>
      <Total key={courses.id} courses={courses}/>
    </div>
    )
}

export default Course