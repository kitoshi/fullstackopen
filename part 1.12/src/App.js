import React, { useState } from 'react'

const Button = (props) => {

  const random = () => Math.floor(Math.random() * (5 - 0) + 0)

  const setToSelected = (newSelected) => props.setSelected(newSelected)
  

  const setToVotes = () => {
  }
  


  const setToVote = (newVote) => {
    props.setVote(newVote)
    const copy = {...props.votes}
    copy[props.vote] += 1
    props.setVotes(copy)
  }

 

  return (
    <>
    <button onClick={() => setToVotes(props.vote) + setToSelected(random)}>Next Anecdote</button>
    <button onClick={() => setToVote(props.selected)}>Vote</button>
    </>
  )
}

const Content = (props) => {

  return (
    <>
    <h1>Anecdote of the Day</h1>
    <p>{props.anecdotes[props.selected]}</p>
    <p>has {props.votes[props.vote]} votes</p>
    </>
  )
}

const Content2 = (props) => {
  return (
    <>
    <h2>Anecdote with the most votes</h2>
    <p>{props.anecdotes[Object.keys(props.votes).reduce((a, b) => props.votes[a] > props.votes[b] ? a : b)]}</p>
    <p>has {Object.values(props.votes).reduce((a, b) => a > b ? a : b)} votes</p>
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
  const [votes, setVotes] = useState([...zeroarray])


  return (
    <div>
      <Content votes={votes} anecdotes={anecdotes} selected={selected} zeroarray={zeroarray} vote={vote}/>
      <Button setSelected={setSelected} setVotes={setVotes} setVote={setVote}  selected={selected} zeroarray={zeroarray} votes={votes} vote={vote}/>
      <Content2 votes={votes} anecdotes={anecdotes} selected={selected} zeroarray={zeroarray} vote={vote}/>
    </div>
  )
}

export default App