import React, { Component } from 'react'

class ErrorBoundary extends Component{
    state = {
        hasErr: false
    }

    componentDidCatch(error, info){
        this.setState({
            hasErr: true
        })
    }

    render(){
        if(this.state.hasErr){
            return <h1 style={{color:'red'}}>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary