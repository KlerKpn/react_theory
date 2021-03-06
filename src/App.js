import React, { Component } from 'react';
import classes from './App.module.scss';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'



class App extends Component  {

  constructor(props){
    super()
    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
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
  // componentWillMount(){
  //   console.log('call component will mount'); // dont use react is not ready
  // }
  // componentDidMount(){
  //   console.log('call component did mount');  // u can use to execute state
  // }
  render(){

    const divStyle = {
      textAlign: 'center'
    }
   
    let cars = null
    if (this.state.showCars){
      cars = this.state.cars.map((car, index)=>{
      return (
        <ErrorBoundary key ={index}>
          <Car 
          name = {car.name}
          year = {car.year}
          index = {index}
          onDelete = {this.onDelete.bind(this, index)}
          onChangeName={event => this.onChangeName(event.target.value, index)}
          // {this.onChangeName.bind(this, this.target, index)}
          />
          </ErrorBoundary>
          )
      }) 
    }  
  
    return (
      <div style={divStyle} className={classes.App}>
        {/* className={classes['App-Header']}  для дефиса*/}
        {/* <h1>{ this.state.pageTitle }</h1> */}
        <h1>{this.props.title}</h1>
        <Counter />
        <hr/>
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
