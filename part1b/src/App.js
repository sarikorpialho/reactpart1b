import React, { useState } from 'react'

const App = () => {
  const [good, setCounter] = useState(0);
  const [neutral, setNeutralCaunter] = useState(0);
  const [bad, setBadCaunter] = useState(0);

  const increaseByOne = () => setCounter(good +1);
  const increaseNeutral = () => setNeutralCaunter(neutral +1);
  const increaseBad = () => setBadCaunter(bad +1);

  const Button = ({ handleclick, text }) => {
    return (
      <div>
        <button onClick={handleclick}>{text}</button>
      </div>
    );
  };
  const Display = (props) => {
    return (
    <div>
      {props.name} {props.statistic}
    </div>
    )
  } 

  const Statistics = ({ good, neutral, bad }) => {

    return (
      <div>
        <Display name="Hyvä" statistic={good} />
        <Display name="Neutraali" statistic={neutral} />
        <Display name="Huono" statistic={bad} />
        <Display name="Keskiarvo" statistic={good - bad / (good + neutral + bad)} />
        <Display name="positiivisia" statistic={good / (good + neutral +bad) *100+"%"} />

      </div>    
    );
  };

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleclick={increaseByOne} text="Hyvä" />
      <Button handleclick={increaseNeutral} text="Keskinkertainen" />
      <Button handleclick={increaseBad} text="Huono" />

      <h1>statistiikka</h1>

      <Statistics good={good} bad={bad} neutral={neutral} />    
    </div>
  )
}

export default App
