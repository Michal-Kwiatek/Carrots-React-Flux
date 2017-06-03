import { EventEmitter } from "events";
import Dispatcher from '../dispatcher';

class ProfilesStore extends EventEmitter {
  constructor() {
    super();

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

  getAll() {
    return this.profiles;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_PROFILE":
        this.createProfile(action.name, action.carrotsCount)
        break;

      default:
        break;
    }
  }
}

const profilesStore = new ProfilesStore();
Dispatcher.register(profilesStore.handleActions.bind(profilesStore));

window.di = Dispatcher;

export default profilesStore;