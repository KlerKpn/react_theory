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
<div style={{
    border: '1px solid black',
    margin: '10px',
    padding: '20px'
}}>
    <p>{props.name}</p>
    <strong>{props.year}</strong>
    <br></br>
    {/* <span>{Math.floor(Math.random() * 100)}</span> */}
    <input type='text' onChange={props.onChangeName} value={props.name} />
    <button onClick={props.onDelete}>Delete</button>
    {props.children}
</div>)
