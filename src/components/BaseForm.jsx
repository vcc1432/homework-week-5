import * as React from 'react'

export default function BaseForm(props) {
  return (<div>
    <form onSubmit={props.handleSubmit}>
    <div className ="input-group mb-3">
    <label className ="input-group-text" htmlFor="inputGroupSelect01">Choose your base: </label>
      <select className ="custom-select" id="inputGroupSelect01" name="base" onChange={props.handleChangeBase}>
        {props.bases.map(base => <option key={base.id} value={base.id}>{base.type}</option>)}
      </select>
    <br />
    </div>

  <div className="input-group mb-3">
    <label className ="input-group-text" htmlFor="inputGroupSelect01">Choose your sauce:</label> 
      <select className ="custom-select" id="inputGroupSelect01" name="sauce" onChange={props.handleChangeSauce}>
        {props.sauces.map(sauce => <option key={sauce.id} value={sauce.id}>{sauce.type}</option>)}
      </select>
      <br />
      </div>

  <fieldset className ="form-group">
    <div className ="row">
      <legend className ="col-form-label col-sm-2 pt-0">Choose your toppings (+€ 0,50 per topping):</legend>
        <div className ="col-sm-10">
          <div className ="form-check">
            {props.toppings.map(item => (
              <div>
              <input 
              className ="form-check-input"
              type='checkbox' 
              value={item.type}
              name="toppings"
              onChange={props.handleToppings} 
              /> 
              <label className ="form-check-label" key={item.id}>{item.type}</label> 
              </div>
          ))
        }
        </div>
      </div>
    </div>
  </fieldset>

  <div className ="form-group row">
    <div className ="col-sm-2">Would you like Turbo Drone Delivery?</div>
      <div className ="col-sm-10">
        <div className ="form-check">
            <input
              className ="form-check-input"
              name="turboDrone"
              type="checkbox"
              checked={props.turboDrone}
              onChange={props.handleInputChange} />
            <label className ="form-check-label" htmlFor="gridCheck1">
              Yes!
            </label>
          </div>
        </div>
      </div>
      <div className ="form-group row">
        <div className ="col-sm-10">
          <button className ="btn btn-info" type="submit">Check total</button>
        </div>
      </div>     
    </form>
  </div>)
}