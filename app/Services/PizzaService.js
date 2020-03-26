//NOTE this is where all of the business logic and the data manipulation actually occurs for our app
import Pizza from "../Models/Pizza.js";
import _store from "../store.js";

//Public
class PizzaService {
  create(newPizzaData) {
    let newPizza = new Pizza(newPizzaData)
    _store.State.pizzas.push(newPizza)
    console.log(_store.State.pizzas)

  }
}

const SERVICE = new PizzaService();
export default SERVICE;
