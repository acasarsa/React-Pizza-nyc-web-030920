import React from "react"

const Pizza = (props) => {
  // console.log(props.topping)
  return(
    
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.editPizza(props.id, props.topping, props.size, props.vegetarian)} >Edit Pizza</button></td>
      {/* <td><button type="button" className="btn btn-primary" onClick={console.log(e => props.editPizza(e.target.value))} >Edit Pizza</button></td> */}
    </tr>
  )
}
// may need to add (e) => props.editPizza(e.target.value)?? if value could be the whole object
export default Pizza  

// on click of edit needed
//means u need to pass something down from app that is the click handler though maybe not 


//when you click the "Edit" button, it should send the pizza associated with that component into the Pizza form. // some click evnt could be on the tr or button. maybe this is a state to go on pizzaList 
// this is a presentational page not rendering i guess. check that. 