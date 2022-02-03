import React, { useState } from 'react'

const App = (props) => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  const increaseByOne = () => setCounter(counter +1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <h1>anna palautetta</h1>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        hyvä
      </button>
      <button onClick={handleClick}>
        neutraali
      </button>
      <button onClick={handleClick}>
        huono
      </button>
    </div>
  )
}

export default App
