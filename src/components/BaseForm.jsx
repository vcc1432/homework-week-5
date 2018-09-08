import * as React from 'react'

export default function BaseForm(props) {
  console.log(props)
  return (<div>
    <label>Choose your base: </label>
      <select name="base" onChange={props.handleChangeBase}>
        {/* <option value=''>Please choose</option> */}
        {props.bases.map(base => <option key={base.id} value={base.id}>{base.type}</option>)}
      </select>
    <br />

    <label>Choose your sauce:</label> 
      <select name="sauce" onChange={props.handleChangeSauce}>
        {/* <option value=''>Please choose</option> */}
        {props.sauces.map(sauce => <option key={sauce.id} value={sauce.id}>{sauce.type}</option>)}
      </select>
    
  </div>)
}