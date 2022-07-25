import React, { Component } from 'react';
import './style.scss';

class Example extends Component {
  state = {
    showPopup: false,
    fullName: 'Jhon Doe'
  };

  handleChangeFullName = (e) => {
    const _value = e.target.value;
    this.setState({
      fullName: _value
    });
  };

  handleShowPopup = () => {
    this.setState({
      showPopup: true
    });
  };

  handleHidePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  render() {
    const {
      handleChangeFullName,
      handleShowPopup,
      handleHidePopup,
      state: { fullName, showPopup }
    } = this;

    return (
      <div className='example'>
        <div className='container'>
          <input type='text' placeholder='Input here' onInput={(e) => handleChangeFullName(e)} />
          <h1>Hello, {fullName}</h1>
          <button type='button' onClick={handleShowPopup}>
            Show Popup
          </button>
          {showPopup && (
            <div className='popup'>
              <div className='container'>
                <button type='button' onClick={handleHidePopup}>
                  Hide Popup
                </button>
                <h2>Popup Content</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Example;
