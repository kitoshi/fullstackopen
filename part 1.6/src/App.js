import React, { useState } from 'react'

const Header = () => <h1>Give Feedback</h1>

const Header2 = () => <h1>Statistics</h1>

const Statistic = (props) => <tr><td>{props.text}</td><td>{props.value} {props.good} {props.neutral} {props.bad} {props.units}</td></tr>

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const average = (props.good + props.neutral + props.bad) / 3
  const positive = (0 + props.good)/(props.good + props.neutral + props.bad)

  if (all === 0) {
    return (
      <>
      No Feedback Given.
      </>
    )
  }

  return (
    <>
      <table>
        <tbody>
          <Statistic text="good" good={props.good}/>
          <Statistic text="neutral" neutral={props.neutral}/>
          <Statistic text="bad" bad={props.bad}/>
          <Statistic text="all" value={all}/>
          <Statistic text="average" value={average}/>
          <Statistic text="positive" value={positive} units="%"/>
        </tbody>
      </table>
    </>    
  )
}

const Button = (props) => {
  const setToGood = (newGood) => {props.setGood(newGood)}
  const setToNeutral = (newNeutral) => {props.setNeutral(newNeutral)}
  const setToBad = (newBad) => {props.setBad(newBad)}
  return (
    <>
    <button onClick={() => setToGood(props.good + 1)}>Good</button>
    <button onClick={() => setToNeutral(props.neutral + 1)}>Neutral</button>
    <button onClick={() => setToBad(props.bad + 1)}>Bad</button>
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // save clicks of each button to its own state
  return (
    <div>
      <Header />
      <Button setGood={setGood} setNeutral={setNeutral} setBad={setBad}  good={good} bad={bad} neutral={neutral} />
      <Header2 />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App