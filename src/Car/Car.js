import React from 'react'
// import Radium from 'radium'
import './car.scss'

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
class Car extends React.Component {

    componentWillReceiveProps(nextProps){
       console.log('componentWillReceiveProps :', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);  // оптимизация
        return nextProps.name.trim() !== this.props.name.trim()
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    render(){
        console.log('Car render')
        const inputClasses = ['input']
        if (this.props.name !==""){ 
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }
        if (this.props.name.length >4){
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
            <p>Car name: {this.props.name}</p>
            <strong>{this.props.year}</strong>
            <br></br>
            {/* <span>{Math.floor(Math.random() * 100)}</span> */}
            <input 
            type='text'
            onChange={this.props.onChangeName} 
            value={this.props.name}
            className={inputClasses.join(' ')}
             />
            <button onClick={this.props.onDelete}>Delete</button>
            {this.props.children}
        </div>
        )
    }
}

export default Car