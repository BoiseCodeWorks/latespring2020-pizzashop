import { generateId } from "../utils.js"
import Topping from "./Topping.js"

//NOTE provides the structure and concept of what a pizza looks and can do.
export default class Pizza {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
    /** @type {Topping[]} */
    this.toppings = []
  }

  get Template() {
    return /*html*/`
      <div class="col-4 border border-warning rounded shadow">
      <button type="button" class="close text-danger" onclick="app.pizzaController.delete('${this.id}')">
      <span>&times;</span>
      </button>
        <h1>${this.title}</h1>
        <form onsubmit="app.pizzaController.addTopping(event, '${this.id}')">
          <div class="form-group">
            <label for="toppingName">Topping Name:</label>
            <input type="text" name="toppingName" class="form-control" placeholder="Type a topping in here..." aria-describedby="helpId">
          </div>
        </form>
        <h5>Toppings:</h5>
        <dl>
          ${this.Toppings}
        </dl>
      </div>
    `
  }

  get Toppings() {
    let template = ''
    this.toppings.forEach(topping => template += topping.getTemplate(this.id))
    return template
  }


}