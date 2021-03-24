import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((prevValue, currentValue) => prevValue + currentValue.exercises, 0)}</p>
  )
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((plist) => <Part name={plist.name} exercises={plist.exercises}/>)}
    </>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts)

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App