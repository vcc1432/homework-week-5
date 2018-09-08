import * as React from 'react'

export default function BaseForm(props) {
  console.log(props)
  return (<div>
    <form onSubmit={props.handleSubmit}>
    <div class="input-group mb-3">
    <label class="input-group-text" htmlFor="inputGroupSelect01">Choose your base: </label>
      <select class="custom-select" id="inputGroupSelect01" name="base" onChange={props.handleChangeBase}>
        {props.bases.map(base => <option key={base.id} value={base.id}>{base.type}</option>)}
      </select>
    <br />
    </div>

  <div className="input-group mb-3">
    <label class="input-group-text" htmlFor="inputGroupSelect01">Choose your sauce:</label> 
      <select class="custom-select" id="inputGroupSelect01" name="sauce" onChange={props.handleChangeSauce}>
        {props.sauces.map(sauce => <option key={sauce.id} value={sauce.id}>{sauce.type}</option>)}
      </select>
      <br />
      </div>

  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Choose your toppings (+€ 0,50 per topping):</legend>
        <div class="col-sm-10">
          <div class="form-check">
            {props.toppings.map(item => (
              <div>
              <input 
              class="form-check-input"
              type='checkbox' 
              value={item.type}
              name="toppings"
              onChange={props.handleToppings} 
              /> 
              <label class="form-check-label" key={item.id}>{item.type}</label> 
              </div>
          ))
        }
        </div>
      </div>
    </div>
  </fieldset>

  <div class="form-group row">
    <div class="col-sm-2">Would you like Turbo Drone Delivery?</div>
      <div class="col-sm-10">
        <div class="form-check">
            <input
              class="form-check-input"
              name="turboDrone"
              type="checkbox"
              checked={props.turboDrone}
              onChange={props.handleInputChange} />
            <label class="form-check-label" for="gridCheck1">
              Yes!
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button class="btn btn-info" type="submit">Check total</button>
        </div>
      </div>     
    </form>
  </div>)
}