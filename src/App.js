import React from "react";
// import HelloDiv from "./components/HelloDiv";
import Burger2 from './components/Buger2';
import Burgerista from './components/Burgerrista';
import Form from './components/Form';







class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    	items: [
      	{ text: "Learn JavaScript", e: false },
        { text: "Learn React", done: false },
        { text: "Play around in JSFiddle", done: true },
        { text: "Build something awesome", done: true }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <h2>cccc</h2>
        <ol>
        {this.state.items.map(item => (
          <li key={item.id}>
            <label>
              <input type="checkbox" disabled readOnly checked={item.done} /> 
              <span className={item.done ? "done" : ""}>{item.text}</span>
            </label>
          </li>
        ))}
        </ol>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#app"))

