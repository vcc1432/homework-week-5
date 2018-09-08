import React from 'react'
import { bases } from './options'


export default function BaseForm(props) {
  console.log(props)
  return (<div>
    <label>
    <h1>Choose your topping:</h1> 
    
      <select name="type" onChange={props.handleChange}>
        {/* <option value=''>Please choose</option> */}
        {props.bases.map(base => <option key={base.id} value={base.id}>{base.type}</option>)}
      </select>
      </label>
  </div>)
}