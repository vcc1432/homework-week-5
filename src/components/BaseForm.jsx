import * as React from 'react'

export default function BaseForm(props) {
  console.log(props)
  return (<div>
    <form onSubmit={props.handleSubmit}>
    <label>Choose your base: </label>
      <select name="base" onChange={props.handleChangeBase}>
        {props.bases.map(base => <option key={base.id} value={base.id}>{base.type}</option>)}
      </select>
    <br />

    <label>Choose your sauce:</label> 
      <select name="sauce" onChange={props.handleChangeSauce}>
        {props.sauces.map(sauce => <option key={sauce.id} value={sauce.id}>{sauce.type}</option>)}
      </select>
      <br />

    <label>Turbo Drone Delivery?  </label>
          <input
            name="turboDrone"
            type="checkbox"
            checked={props.turboDrone}
            onChange={props.handleInputChange} />
        <br />

      <button type="submit">Save</button>
    </form>
  </div>)
}