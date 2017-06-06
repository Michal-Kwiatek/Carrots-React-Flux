import React from 'react';

import * as profileActions from '../actions/ProfilesActions';

class ButtonsGroup extends React.Component {
  constructor() {
    super();

    this.state = {
      buttons: [1, 5, 10, 25, 50, 100]
    }
  }

  addCarrots(e) {
    profileActions.addCarrots(e.target.value);
  }

  subtractCarrots(e) {
    profileActions.subtractCarrots(e.target.value);
  }

  generateButtons(operation) {
    let classes = 'countButton';
    let func;

    if(operation === '+') {
      classes += ' btn-success';
      func = this.addCarrots;
    } else {
      classes += ' btn-danger';
      func = this.subtractCarrots;
    }

    const buttons = this.state.buttons.map(count => {
      return <button className={classes} 
      onClick = { e => func(e) }
      value={count} key={count}> {operation + count} </button>;
    })

    return buttons;
  }

  render() {
    const plusButtons = this.generateButtons('+');
    const minusButtons = this.generateButtons('-');

    return (
      <div className="buttonGroup">
        <div>{plusButtons}</div>
        <div>{minusButtons}</div>
      </div>
    )
  }
}


export default ButtonsGroup;