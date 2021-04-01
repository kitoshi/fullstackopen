import React, { useState } from 'react'

const Button = (props) => {

  const setToSelected = (newSelected) => props.setSelected(newSelected)

  const setToArray = (newVote) => {
    props.setVote(newVote)
    const copy2 = props.array
    copy2[props.vote] += 0
    props.setArray(copy2)
  }
  
  const random = () => Math.floor(Math.random() * (5 - 0) + 0)

  const setToVote = (newVote) => {
    props.setVote(newVote)
    const copy = {...props.array}
    copy[props.vote] += 1
    props.setArray(copy)
  }

 

  return (
    <>
    <button onClick={() => setToArray(props.selected) + setToSelected(random)}>Next Anecdote</button>
    <button onClick={() => setToVote(props.selected)}>Vote</button>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <p>{props.anecdotes[props.selected]}</p>
    <p>has {props.array[props.vote]} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const zeroarray = new Array(6).fill(0)

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const [array, setArray] = useState([...zeroarray])



  return (
    <div>
      <Content array={array} anecdotes={anecdotes} selected={selected} zeroarray={zeroarray} vote={vote}/>
      <Button setSelected={setSelected} setArray={setArray} setVote={setVote}  selected={selected} zeroarray={zeroarray} array={array} vote={vote}/>
    </div>
  )
}

export default App