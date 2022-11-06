import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) => {
  console.log(props.array);
  return (
    <div id="join">
      {props.array.join(',')}
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join array={arr} />

    </div>
  )
}


export default App;
