//NOTE provides the structure and concept of what a pizza looks and can do.
export default class Pizza {
  constructor(data) {
    this.title = data.title
  }

  get Template() {
    return /*html*/`
      <div class="col-4 border border-warning rounded shadow">
      <button onclick="app.pizzaController.delete()">Delete</button>
        <h1>${this.title}</h1>
        <h5>Toppings:</h5>
        <dl>
          <dd>pepperoni</dd>
        </dl>
      </div>
    `
  }
}