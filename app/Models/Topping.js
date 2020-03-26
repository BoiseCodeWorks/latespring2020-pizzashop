import { generateId } from "../utils.js"

//NOTE provides the structure and concept of what a pizza looks and can do.
export default class Topping {
  constructor(data) {
    this.title = data.title
    this.id = data.id || generateId()
  }

  getTemplate(pizzaId) {
    return /*html*/`
      <dd>
      <button type="button" class="close text-danger" onclick="app.pizzaController.deleteTopping('${pizzaId}','${this.id}')">
      <span>&times;</span>
      </button>
      <h5>${this.title}</h5>
      </dd>
    `
  }
}