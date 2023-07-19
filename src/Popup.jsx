import React from 'react';
import './Popup.css'
import {RiWhatsappFill} from 'react-icons/ri'
class Popup extends React.Component {
    handleClick = () => {
      const phoneNumber = document.getElementById('phoneNumber').value;
      if (phoneNumber) {
        const url = `http://wa.me/${phoneNumber}`;
        window.location.href = url;
      }
    };
  
  
    render() {
      return (
        <div className='pop'>
        <div className="popup-container">
          <h1 className="popup-title"><RiWhatsappFill/> QuickWApp</h1>
          <p className="popup-description">
            Enter the phone number (with the country code):
          </p>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Phone number"
            className="popup-input"
          />
          <button
            id="openWhatsApp"
            className="popup-button"
            onClick={this.handleClick}
          >
            Open WhatsApp
          </button>

          <h1>Made by Vikash Chand with 💖🔥</h1>
        </div>

        </div>
      );
    }
  }
  

export default Popup;
