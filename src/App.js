import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    topping: "",
    size: "",
    vegetarian: "",
    pizzaID: ""
    
  }


  fetchPizza = () => {
    fetch('http://localhost:3000/pizzas')
      .then(r => r.json())
      .then(data => this.setState({
        pizzas: data
      }))
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   patchPizzas()
  // }

  patchPizzas = (event) => {
    // event.preventDefault();
    let data = { 
      topping: this.state.topping, 
      size: this.state.size, 
      vegetarian: this.state.vegetarian 
    } 

    console.log("data",data)

    fetch(`http://localhost:3000/pizzas/${this.state.pizzaID}`,  {
      method: 'PATCH',
      body: JSON.stringify(data),// data = all updated values) 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(r => r.json())
      .then(pizza => {
        this.setState({pizzas: this.state.pizzas.map( p => (p.id === pizza.id) ? pizza : p) 
        })
      })

        // if it was a form do form.reset() here
        // 
      // .this(pizza => this.setState({

      // }))
  }

  componentDidMount() {
    this.fetchPizza()
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleVeggies = (value) => {
    this.setState({vegetarian: value})
  }

  editPizza = (id, topping, size, vegetarian) => {
  
    this.setState({pizzaID: id})
    this.setState({topping: topping})
    this.setState({size: size})
    this.setState({vegetarian: vegetarian})
    
  }




  render() {
    
    return (
      <Fragment> 
        <Header/>
        <PizzaForm handleChange={this.handleChange} {...this.state} handleSubmit={this.patchPizzas} handleVeggies={this.handleVeggies} />
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;

// what's a fragment check out that lab... 