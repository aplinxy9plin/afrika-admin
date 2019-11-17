import React, { Component } from 'react'

import Card from './Card'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: null
    }
  }
  componentDidMount() {
    fetch("https://afrika-backend.herokuapp.com/")
    .then(response => response.json())
    .then(data => {
      this.setState({
        result: data.result
      })
    })
  }
  
  render() {
    return (
      <div className="container">
        <div class="row">
         {
           this.state.result && this.state.result.map((item) => 
             <div className="col-4">
               <Card 
                time={item.time}
                position={item.position}
                text={item.text}
                photo={item.photo}
                color={item.text.indexOf("kill") > -1 ? "white" : "black"}
                words={
                item.text.indexOf("kill") > -1 ? "kill" : item.text.indexOf("animal") > -1 ? "animal" : item.text.split(" ")[0]
               } />
             </div>
           )
         }
        </div>
      </div>
    )
  }
}
