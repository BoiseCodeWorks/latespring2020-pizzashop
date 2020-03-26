//NOTE in charge of taking user input from the view, and passing it on to the service. Also in charge of drawing the results of those actions to the view

import _pizzaService from "../Services/PizzaService.js";
import _store from '../store.js'


//private
function _drawPizzas() {
  let template = ''
  let pizzas = _store.State.pizzas


  pizzas.forEach(pizza => template += pizza.Template)

  document.getElementById("pizzas").innerHTML = template
}



//Public
export default class PizzaController {
  //NOTE any action that happens on page load should be added to the constructor
  constructor() {
    _drawPizzas()
  }

  create(event) {
    event.preventDefault()
    let formData = event.target
    let newPizza = {
      //NOTE we said formData.pizzaName because that is the name on our input in our index.html on our form and we set its value to title because our pizza class has title as its property.
      title: formData.pizzaName.value
    }

    _pizzaService.create(newPizza)
    _drawPizzas()
    formData.reset()
  }

}
