/* eslint eqeqeq: 0 */

import { EventEmitter } from "events";
import Dispatcher from '../dispatcher';

import * as utils from '../utils/uniqueId';

class ProfilesStore extends EventEmitter {
  constructor() {
    super();

    this.profiles = this.initialLoadFromStorage();
    this.selectedProfile = undefined;
    this.on("profilesUpdate", this.saveToLocalStorage);             /// SAVING TO LOCALSTORAGE WHEN PROFILES ARRAY CHANGE EVENT FIRED
  }

  initialLoadFromStorage() {
    const profiles = JSON.parse(window.localStorage.getItem("profiles"));

    return profiles || [];                                  /// IF PROFILES ARE NOT FOUND IN LOCALSTORAGE RETURN EMPTY ARRAY
  }

  saveToLocalStorage() {
    const profiles = JSON.stringify(this.profiles)

    window.localStorage.setItem("profiles", profiles);
  }

  createProfile(name, carrotsCount) {
    const id = utils.generateId();

    this.profiles.push({
      id,
      name,
      carrotsCount
    })
    this.emit("profilesUpdate");
  }

  changeSelected(id) {
    const selected = this.profiles.filter(profile => profile.id == id);
    this.selectedProfile = selected[0];     

    this.emit("selectedChange");
  }

  deleteSelected() {
    let index = this.profiles.indexOf(this.selectedProfile);
    let copy = [...this.profiles];
    copy.splice(index, 1);                 // IMMUTABLE
    this.profiles = copy;

    this.selectedProfile = undefined;
    this.emit("profilesUpdate");
  }

  addSubtractCarrots(number, operation) {
    number = parseInt(number, 10);
    const oldCount = parseInt(this.selectedProfile.carrotsCount, 10);
    let newCount;

    if(operation === '+') {
      newCount = oldCount + number;
      newCount = newCount > 10000 ? 10000 : newCount;
    }else {
      newCount = oldCount - number;
      newCount = newCount < 0 ? 0 : newCount;
    }

    this.selectedProfile.carrotsCount = newCount;
    this.emit("profilesUpdate");
  }


  /* GETTERS */
  getSelected() {
    if (this.profiles.length && !this.selectedProfile) {   // IF AT LEAST ONE PROFILE EXIST IN ARRAY AND NO PROFILE IS SELECTED THEN SELECT FIRST ONE
      this.selectedProfile = this.profiles[0];
    }

    return this.selectedProfile;
  }

  getAll() {
    return this.profiles;
  }



  /* HANDLER */
  handleActions(action) {
    switch (action.type) {
      case "CREATE_PROFILE":
        this.createProfile(action.name, action.carrotsCount)
        break;

      case "SELECTED_PROFILE_CHANGE":
        this.changeSelected(action.id)
        break;

      case "DELETE_SELECTED_PROFILE":
        this.deleteSelected()
        break;

      case "ADD_CARROTS":
        this.addSubtractCarrots(action.count, '+')
        break;

      case "SUBTRACT_CARROTS":
        this.addSubtractCarrots(action.count, '-')
        break;

      default:
        break;
    }
  }
}

const profilesStore = new ProfilesStore();

Dispatcher.register(profilesStore.handleActions.bind(profilesStore));

export default profilesStore;