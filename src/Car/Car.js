import React from 'react'
// import Radium from 'radium'
import './car.scss'

class Car extends React.Component {

    // componentWillReceiveProps(nextProps){
    //    console.log('componentWillReceiveProps :', nextProps);   // сихрон local state(old)
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate', nextProps, nextState); 
    //     return nextProps.name.trim() !== this.props.name.trim()    // оптимизация   if true перперисовываем компонент
    // }
    // componentWillUpdate(nextProps, nextState){                       
    //     console.log('componentWillUpdate', nextProps, nextState);        // знаем что компонент будет изменен
    // }                                                                    // готовимся к изменению

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('Car  getDerivedStateFromProps ', nextProps, prevState)
        return prevState
    }
    componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    getSnapshotBeforeUpdate(kk){
        console.log('getSnapshotBeforeUpdate',kk);  // ПОЛУЧАЕМ ДОМ ДЕРЕВО ДО ОБНОВЛЕНИЯ
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');  // при удалении
    }
    render(){
        // if(Math.random() > 0.7){
        //     throw new Error ('xui tebe a ne stabil`nost')
        // }
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