import { useState } from 'react'

const MaxVotes = ({anecdotes, votes}) => {
  const highestVote = Math.max(...votes)
  const highestIndex = votes.indexOf(highestVote)
  const highest = anecdotes[highestIndex]
  if (highestVote === 0) {
    return (
      <p>No votes yet</p>
    )
  }

  return (
    <div>
      <p>{highest}</p>
      <p>has {highestVote} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const n = anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(n).fill(0))

  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>
        vote
        </button>
      <button onClick={()=> setSelected(Math.floor(Math.random()*anecdotes.length))}>
        next Anecdote
        </button>
      <h1>Anecdote with most votes</h1>
      <MaxVotes anecdotes={anecdotes} votes={votes}></MaxVotes>
    </div>
  )
}

export default App
