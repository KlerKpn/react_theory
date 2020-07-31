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
    pageTitle: 'React components'
  }

  titleHandler = (newTitle) => {
   // const oldtitle = this.state.pageTitle
   
    this.setState({
      pageTitle: newTitle
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
        <button onClick={this.titleHandler.bind(this,'Changed!')}>Click</button>
        <Car 
          name={cars[0].name}
          year={cars[0].year}
          onChanger={this.titleHandler.bind(this, cars[0].name)} // Оптимизация на больших проектах recomended
        /> 
        <Car
          name={cars[1].name} 
          year={cars[1].year}
          onChanger={() => this.titleHandler(cars[1].name)}       // плохая оптимизация на больших преоктах  
        /> 
        <Car 
          name={cars[2].name} 
          year={cars[2].year}
          onChanger={() => this.titleHandler(cars[2].name)} 
        >
             <p style={{color:'yellow'}}>COLOR</p>
        </Car>
      </div>
    );
  }
}

export default App;
