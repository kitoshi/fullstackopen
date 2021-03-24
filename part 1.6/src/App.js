import React, { useState } from 'react'

const Header = () => <h1>Give Feedback</h1>
const Header2 = () => <h1>Statistics</h1>
const Content = (props) => <p>{props.text} {props.value}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newGood) => {setGood(newGood)}
  const setToNeutral = (newNeutral) => {setNeutral(newNeutral)}
  const setToBad = (newBad) => {setBad(newBad)}

  return (
    <div>
      <Header />
      <button onClick={() => setToGood(good + 1)}>Good</button>
      <button onClick={() => setToNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setToBad(bad + 1)}>Bad</button>
      <Header2 />
      <Content text="good" value={good} />
      <Content text="neutral" value={neutral} />
      <Content text="bad" value={bad} />
    </div>
  )
}

export default App