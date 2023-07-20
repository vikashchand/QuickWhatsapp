import React from 'react';
import './Popup.css'
import {RiWhatsappFill} from 'react-icons/ri'
import {FcPortraitMode} from 'react-icons/fc'

class Popup extends React.Component {
  handleClick = () => {
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber) {
      const url = `http://wa.me/${phoneNumber}`;
      window.location.href = url;
    }
  };

  handleUser = () => {
    window.location.href = "https://vikashchand.vercel.app/";
  }

  handlePhoneNumberChange = (event) => {
    const cleanedPhoneNumber = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    document.getElementById('phoneNumber').value = cleanedPhoneNumber;
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
            onChange={this.handlePhoneNumberChange} // Add onChange event
          />
          <button
            id="openWhatsApp"
            className="popup-button"
            onClick={this.handleClick}
          >
            Open WhatsApp
          </button>

          <br></br>
          <br></br>
          <br></br>

          <h3> Made by Vikash Chand with 💖🔥</h3> 
          <button className='popup-button' onClick={this.handleUser} > Creator Website <FcPortraitMode/> </button>
        </div>
      </div>
    );
  }
}

export default Popup;
