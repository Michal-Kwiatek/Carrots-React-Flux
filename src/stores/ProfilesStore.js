/* eslint eqeqeq: 0 */

import { EventEmitter } from "events";
import Dispatcher from '../dispatcher';

import * as utils from '../utils/uniqueId';

class ProfilesStore extends EventEmitter {
  constructor() {
    super();

    this.profiles = this.initialLoadFromStorage();
    this.selectedProfile = undefined;
    this.formValid = false;
    this.on("profilesUpdate", this.saveToLocalStorage);             /// SAVING TO LOCALSTORAGE WHEN PROFILES ARRAY CHANGE EVENT FIRED
  }

  initialLoadFromStorage() {
    const profiles = JSON.parse( localStorage.getItem("profiles") );

    return profiles || [];                                  /// IF PROFILES ARE NOT FOUND IN LOCALSTORAGE RETURN EMPTY ARRAY
  }

  saveToLocalStorage() {
    const profiles = JSON.stringify( this.profiles )

    localStorage.setItem("profiles", profiles);
  }

  createProfile(name, carrotsCount) {           
    const id = utils.generateId();   
    
    this.profiles.push({
      id,
      name,
      carrotsCount
    })
    this.emit("profilesUpdate");
    
    this.formValid = false;
    this.emit("validChange");
  }

  changeSelected(id) {
    const selected = this.profiles.filter(profile => profile.id == id);
    this.selectedProfile = selected[0];     // IMMUTABLE

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

  validateForm(data) {
    let nameValid = this.validateName(data.rabbitName);
    let countValid = this.validateCount(data.carrotsCount);

    this.formValid = nameValid && countValid;

    this.emit("validChange");
  }

  validateName(name) {
    let val = name.trim();
    return val.length >= 3;
  }

  validateCount(count) {
    let val = parseFloat(count);
    return Number.isInteger(val) && val >= 0 && val <= 10000;
  }

  /* GETTERS */
  isFormValid() {
    return this.formValid;
  }

  getSelected() {
    if(this.profiles.length && !this.selectedProfile) {   // IF AT LEAST ONE PROFILE EXIST IN ARRAY AND NO PROFILE IS SELECTED THEN SELECT FIRST ONE
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

      case "VALIDATE_FORM":
        this.validateForm(action.data)
        break;

      case "SELECTED_PROFILE_CHANGE":
        this.changeSelected(action.id)
        break;

      case "DELETE_SELECTED_PROFILE":
        this.deleteSelected()
        break;

      default:
        break;
    }
  }
}

const profilesStore = new ProfilesStore();

Dispatcher.register(profilesStore.handleActions.bind(profilesStore));
window.s = profilesStore;
export default profilesStore;