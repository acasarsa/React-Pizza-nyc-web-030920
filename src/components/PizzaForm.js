import React from "react"

const PizzaForm = (props) => {

  // console.log("topping is ",props.topping)



  return(
      <div className="form-row" >
        <div className="col-5">
            <input onChange={(event) => props.handleChange(event)} type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={props.topping} />
        </div>
        <div className="col" >
          <select onChange={(event) => props.handleChange(event)} value={props.size} className="form-control" name="size" >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={() => props.handleVeggies(true)} className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={(props.vegetarian) ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={() => props.handleVeggies(false)} className="form-check-input" type="radio" name="vegetarian" value="Non Vegetarian" checked={(!props.vegetarian) ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => props.handleSubmit(e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm

//form is submitted, the information should be reflected in your table and persist in the backend. need to do a fetch post on the pizzaList to persist. do i need to post directly to the table? or do i have a get and then once persisted it will update? 
