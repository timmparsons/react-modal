import React from 'react';

export class ModalButton extends React.Component {

  render() {
    return (
      <button onClick={this.props.toggleModal}>Click Me!</button>
    );
  }
}
