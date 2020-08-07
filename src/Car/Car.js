import React from 'react'
import classes from './car.module.scss'
import withClass from '../hoc/withClass'
import propTypes from 'prop-types'


class Car extends React.Component {

   
    render(){
       
        console.log('Car render')
        const inputClasses = [classes.input]

        if (this.props.name !== '') {
          inputClasses.push(classes.green)
        } else {
          inputClasses.push(classes.red)
        }
  
        if (this.props.name.length > 4) {
          inputClasses.push(classes.bold)
        }
    
    
        return (
        <>
            <p>Car name: {this.props.name}</p>
            <strong>{this.props.year}</strong>
            <br />
            <input 
            type='text'
            onChange={this.props.onChangeName} 
            value={this.props.name}
            className={inputClasses.join(' ')}
             />
            <button onClick={this.props.onDelete}>Delete</button>
            {this.props.children}
        </>
        )
    }
}

Car.propTypes={
    name: propTypes.string,
    year: propTypes.number,
    onChange: propTypes.func,
    onDelete: propTypes.func
}

export default withClass(Car, classes.Car)