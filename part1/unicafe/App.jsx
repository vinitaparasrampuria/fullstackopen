import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine =(props) => {
  if (props.text === "positive") {
    return (
      <tr><td>{props.text}</td>
      <td> {props.value} %</td></tr>
    )
  }
  return(
    <tr><td>{props.text}</td>
      <td> {props.value}</td></tr>
  )
}

const Statistics = (props) => {
  if (props.good===0 && props.neutral===0 && props.bad===0){
  return (
    <div>
      No feedback given
    </div>
  )
}
  return(
  <div>
    <table>
      <tbody>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={props.good+props.neutral+props.bad} />
        <StatisticLine text="average" value ={(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
        <StatisticLine text="positive" value ={(props.good*100)/(props.good+props.neutral+props.bad)} />

      </tbody>
    </table>
  </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=> setGood(good+1)} text="good">
        </Button>
        <Button handleClick={()=> setNeutral(neutral+1)} text="neutral">
        </Button>
        <Button handleClick={()=> setBad(bad+1)} text="bad">
        </Button>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
