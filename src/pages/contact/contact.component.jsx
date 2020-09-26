import React from 'react';
import './contact.styles.css';
import MapContainer from './map.component';

const Contact = () => {
  return (

      <div className='contactwrapper'>
        <MapContainer />

        <div className='wrapper'>
          <div className='title'>
            <h1>Contact Us ...</h1>
          </div>
          <div className='contact-form'>
            <div className='input-fields'>
              <input type='text' className='input' placeholder='Name' />
              <input
                type='text'
                className='input'
                placeholder='Email Address'
              />
              <input type='text' className='input' placeholder='Phone' />
              <input type='text' className='input' placeholder='Subject' />
            </div>
            <div className='msg'>
              <textarea placeholder='Message'></textarea>

              <div className='btn'>send</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
