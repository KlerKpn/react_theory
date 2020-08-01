import React from 'react'
import Radium from 'radium'
import './car.css'

// function car(){
//     return (
//         <h2>Test h1</h2>
//     )
// }

// const car = () => (
// <div>Test h1
//     <strong>simple text</strong>
// </div>
// )

const Car = props => {
    const inputClasses = ['input']
    
    if (props.name !==""){
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }
    if (props.name.length >4){
        inputClasses.push('bold')
    } 

    const style = {
        border: '1px solid #ccc',
        boxShadow:' 0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover':{
                border: '1px solid #aaa',
                boxShadow:' 0 4px 15px 0 rgba(0, 0, 0, .25)',
            }
    }

    return (
    <div className='Car' style={style}>
        <p>Car name: {props.name}</p>
        <strong>{props.year}</strong>
        <br></br>
        {/* <span>{Math.floor(Math.random() * 100)}</span> */}
        <input 
        type='text'
        onChange={props.onChangeName} 
        value={props.name}
        className={inputClasses.join(' ')}
         />
        <button onClick={props.onDelete}>Delete</button>
        {props.children}
    </div>
    )
}
export default Radium(Car)