import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'



class App extends Component  {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  titleHandler = (newTitle) => {
   // const oldtitle = this.state.pageTitle
   
    this.setState({
      pageTitle: newTitle
    })
  }

  toggleCars = ()=>{
    this.setState({
      showCars : !this.state.showCars
    })
  }
 
  render(){
    const divStyle = {
      textAlign: 'center'
    }
    const cars = this.state.cars
    return (
      <div style={divStyle} className="App">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCars}>Click</button>

        { this.state.showCars ?
            this.state.cars.map((car, index)=>{
            return (
              <Car 
              key ={index}
              name = {car.name}
              year = {car.year}
              onChanger={this.titleHandler.bind(this, car.name)}
              />)
            })
          : null  
        }
      </div>
    );
  }
}

export default App;
