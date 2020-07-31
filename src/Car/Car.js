import React from 'react'

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

export default props => (
<div>
    <p>{props.name}</p>
    <strong>{props.year}</strong>
    <br></br>
    {/* <span>{Math.floor(Math.random() * 100)}</span> */}
    <button onClick={props.onChanger}>Click me</button>
    {props.children}
</div>)
