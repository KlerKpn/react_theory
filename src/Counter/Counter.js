import React, { Component } from 'react'
import Auxiliary from '../Auxiliary/Auxiliary'

class Counter extends Component{
    state={
        count: 0
    }
    addCount = ()=>{
        // this.setState({
        //     count: this.state.count +1
        // })
        this.setState((prevState)=> {
            return {                            // безопасное изменение state 
                count: prevState.count +1
            }
        })  
    }
    render(){
        // return(    !!!  ДЛЯ ЛОХОВ
        //     <div>
        //         <h2>Counter {this.state.count}</h2>
        //         <button onClick={this.addCount}>+</button>
        //         <button onClick={()=> this.setState({count: this.state.count-1})}>-</button>
        //     </div>
        // )

        // return [
        //     <h2 key='1'>Counter {this.state.count}</h2>,  !!!   ДЛЯ ПАЦАНОВ
        //     <button key='2' onClick={this.addCount}>+</button>,
        //     <button key='3' onClick={()=> this.setState({count: this.state.count-1})}>-</button>
        // ]

        // return(              
        //     <React.Fragment>                             !!! ДЛЯ ТЕХ КТО РИЛ ШАРИТ
        //         <h2>Counter {this.state.count}</h2>
        //         <button onClick={this.addCount}>+</button>
        //         <button onClick={()=> this.setState({count: this.state.count-1})}>-</button>
        //     </React.Fragment>
        // )

        
         return(      
           // !!!     ПРОСТО ЛУЧШИЙ                                   
            <Auxiliary>                             
                <h2>Counter {this.state.count}</h2>
                <button onClick={this.addCount}>+</button>
                <button onClick={()=> this.setState({count: this.state.count-1})}>-</button>
            </Auxiliary>
        )


        //  return(                                        
        //     <>                             
        //         <h2>Counter {this.state.count}</h2>
        //         <button onClick={this.addCount}>+</button>
        //         <button onClick={()=> this.setState({count: this.state.count-1})}>-</button>
        //     </>
        //     //  !!!    ЧЕ ДУМАЕШЬ САМЫЙ УМНЫЙ????
        // )
    
    }
}

export default Counter