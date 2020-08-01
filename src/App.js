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


  toggleCars = ()=>{
    this.setState({
      showCars : !this.state.showCars
    })
  }
  onChangeName(name, index){
    console.log(name, index)
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars
    })
  }
  onDelete(index){
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})    
  }
  render(){
    const divStyle = {
      textAlign: 'center'
    }
   
    let cars = null
    if (this.state.showCars){
      cars = this.state.cars.map((car, index)=>{
      return (
        <Car 
        key ={index}
        name = {car.name}
        year = {car.year}
        onDelete = {this.onDelete.bind(this, index)}
        onChangeName={event => this.onChangeName(event.target.value, index)}
        // {this.onChangeName.bind(this, this.target, index)}
        />)
      }) 
    }  
  
    return (
      <div style={divStyle} className="App">
        <h1>{ this.state.pageTitle }</h1>
        <button onClick={ this.toggleCars }>Click</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop:'20px'
        }}>
          { cars }
        </div>  
      </div>
    );
  }
}

export default App;
