import React from 'react'
import {useState} from 'react';
import Axios from 'axios'


function BetterRequestForm() {
    // better way is we can make changes to an array of object
  const thing = {name: '', item: '', description: ''}
  
  const [ourform, setOurform] = useState(thing);

    const borrowSomething = () => {
      Axios.post('http://localhost:3001/create', {
        name : ourform.name,
        item : ourform.item,
        description: ourform.description
      }).then(() => console.log("success"))
    }
    const getProducts = () => {
      Axios.get('http://localhost:3001/products', {
        name : ourform.name,
        item : ourform.item,
        description: ourform.description
      }).then((response) => console.log(response))
    }


  function handleChange(e){
    const {name} = e.target
    const {value} = e.target
    const updated = {
      ...ourform,
      [name] : value
    };
    setOurform(updated)
    // console.log(updated);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    borrowSomething()
    console.log(ourform);  
  }


  return (
     <div className='info-containter'>
        <label>Name: </label>
        <input type='text' name='name' onChange={handleChange}/>
        <label>Item request: </label>
        <input type='text' name='item'  onChange={handleChange}/>
        <label>Description: </label>
        <input type='text' name='description'  onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit request</button>
        <div>
        Display all loan info
        <button onClick={getProducts}>Show All Loan Request</button>
        </div>
     </div> 
  )
}

export default BetterRequestForm
