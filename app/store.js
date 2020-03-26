//NOTE this holds all of our data, no data manipulation occurs here, just the storage of the snapshot of what our data currently looks like for our app
import Value from "./Models/Value.js";
import Pizza from "./Models/Pizza.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Pizza[]} */
  pizzas: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
