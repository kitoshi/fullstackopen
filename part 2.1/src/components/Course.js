import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const headerList = (courses) => {
    return (
      <Header key={courses.id} courses={courses}
      />
    )
  }

  const contentList = (courses) => {
    return (
      <Content key={courses.id} course={courses}
      />
    )
  }

  const totalList = (courses) => {
    return (
      <Total key={courses.id} courses={courses}
      />
    )
  }

    return (
    <div>
      {courses.map(headerList)}
      {courses.map(contentList)}
      {courses.map(totalList)}
    </div>
    )
    }

export default Course