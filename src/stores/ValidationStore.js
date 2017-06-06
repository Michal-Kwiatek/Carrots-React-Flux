/* eslint eqeqeq: 0 */

import { EventEmitter } from "events";
import Dispatcher from '../dispatcher';


class ValidationStore extends EventEmitter {
  constructor() {
    super();

    this.formValid = false;
  }

  validateForm(data) {
    let nameValid = this.validateName(data.rabbitName);
    let countValid = this.validateCount(data.carrotsCount);

    this.changeState(nameValid && countValid) 
  }

  validateName(name) {
    let val = name.trim();
    return val.length >= 3;
  }

  validateCount(count) {
    let val = parseFloat(count);
    return Number.isInteger(val) && val >= 0 && val <= 10000;
  }

  changeState(state) {
    this.formValid = state;

    this.emit("stateChange");
  }

  /* GETTERS */
  isFormValid() {
    return this.formValid;
  }

  /* HANDLER */
  handleActions(action) {
    switch (action.type) {

      case "VALIDATE_FORM":
        this.validateForm(action.data)
        break;

      case "VALIDATE_CHANGE_STATE":
        this.changeState(action.state)
        break;

      default:
        break;
    }
  }
}

const validationStore = new ValidationStore();

Dispatcher.register(validationStore.handleActions.bind(validationStore));

export default validationStore;