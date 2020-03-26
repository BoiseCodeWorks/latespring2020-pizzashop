//NOTE this holds all of our data, no data manipulation occurs here, just the storage of the snapshot of what our data currently looks like for our app
import Value from "./Models/Value.js";
import Pizza from "./Models/Pizza.js";
import Topping from "./Models/Topping.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Pizza[]} */
  pizzas: []
};

function _loadState() {
  let stateObj = JSON.parse(localStorage.getItem('pizzas'))
  _state.pizzas = stateObj.pizzas.map(pizzaData => {
    let pizza = new Pizza(pizzaData)
    pizza.toppings = pizza.toppings.map(toppingData => new Topping(toppingData))
    return pizza
  })
  console.log(stateObj)
}


class Store {
  /**
   * Provides access to application state data
   */

  saveState() {
    localStorage.setItem('pizzas', JSON.stringify(_state))
  }

  get State() {
    return _state;
  }
}

_loadState()

const STORE = new Store();
export default STORE;
