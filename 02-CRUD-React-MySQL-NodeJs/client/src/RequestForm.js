import React from 'react'
import {useState} from 'react';

function RequestForm() {
    // one way of doing is update the State individually
    const [name, setName] = useState('')
    const [item, setItem] = useState('')
    const [description, setDescription] = useState('')


    function displayInfo(){
        console.log('Name: ' + name, " Item: " + item, " Description" + description);
    }
    
  return (
    <div className='info-containter'>
        <label>Name: </label>
        <input type='text' onChange={(event) => setName(event.target.value)} />

        <label>Item request: </label>
        <input type='text' onChange={(event) => setItem(event.target.value)}/>
        <label>Description: </label>
        <input type='text' onChange={(event) => setDescription(event.target.value)}/>
        <button onClick={displayInfo}>Submit request</button>
     </div> 
     
  )
}

export default RequestForm
