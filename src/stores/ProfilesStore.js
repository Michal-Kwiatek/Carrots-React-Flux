import { EventEmitter } from "events";
import Dispatcher from '../dispatcher';

class ProfilesStore extends EventEmitter {
  constructor() {
    super();

    this.formValid = false;

    this.profiles = [
      {
        id: 543534,
        name: "Andrzej",
        carrotsCount: 15
      },
      {
        id: 32132,
        name: "Ryszard",
        carrotsCount: 22
      }
    ];
  }

  createProfile(name, carrotsCount) {
    const id = Date.now();

    this.profiles.push({
      id,
      name,
      carrotsCount
    })

    this.emit("change");
  }

  validateForm(data) {
    let nameValid = this.validateName(data.rabbitName);
    let countValid = this.validateCount(data.carrotsCount);

    this.formValid = nameValid && countValid;

    this.emit("validated");
  }

  validateName(name) {
    let val = name.trim();
    return val.length >= 3;
  }

  validateCount(count) {
    let val = parseFloat(count);
    return Number.isInteger(val) && val >= 0 && val <= 10000;
  }

  isFormValid() {
    return this.formValid;
  }

  getAll() {
    return this.profiles;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_PROFILE":
        this.createProfile(action.name, action.carrotsCount)
        break;

      case "VALIDATE_FORM":
        this.validateForm(action.data)
        break;

      default:
        break;
    }
  }
}

const profilesStore = new ProfilesStore();
Dispatcher.register(profilesStore.handleActions.bind(profilesStore));

export default profilesStore;