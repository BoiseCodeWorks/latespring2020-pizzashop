//NOTE this is where all of the business logic and the data manipulation actually occurs for our app
import Pizza from "../Models/Pizza.js";
import Topping from '../Models/Topping.js'
import _store from "../store.js";


//Public
class PizzaService {
  addTopping(newToppingData, pizzaId) {
    let newTopping = new Topping(newToppingData)
    let pizza = _store.State.pizzas.find(pizza => pizza.id
      == pizzaId)
    pizza.toppings.push(newTopping)
    console.log(pizza)
    _store.saveState()
  }
  delete(pizzaId) {
    //NOTE Delete by index instead
    let index = _store.State.pizzas.findIndex(pizza => pizza.id == pizzaId)
    _store.State.pizzas.splice(index, 1)

    //NOTE remove by filtering all the pizzas whose id we are not deleting
    // _store.State.pizzas = _store.State.pizzas.filter(pizza => pizza.id != pizzaId)
    _store.saveState()
  }
  create(newPizzaData) {
    let newPizza = new Pizza(newPizzaData)
    _store.State.pizzas.push(newPizza)
    console.log(_store.State.pizzas)
    _store.saveState()

  }
}

const SERVICE = new PizzaService();
export default SERVICE;
