import { useState } from 'react';

import './Contact.css';

import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

function Contact() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'f709fdbb-17bf-4518-9c64-5f1a501fe93f');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log('Error', res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <img src={msg_icon} alt='send-us pic' />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
          recusandae laudantium odio non perspiciatis ducimus pariatur
          accusantium maiores, id sunt facilis error quas labore quae sapiente.
          Deleniti incidunt error nemo!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt='mail pic' />
            email@dev.org
          </li>
          <li>
            {' '}
            <img src={phone_icon} alt='phone pic' />
            +375-44-4444-555
          </li>
          <li>
            <img src={location_icon} alt='loc icon' />
            88 Log Street, Pinsk <br /> MA 02333, Belarus
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type='text'
            name='name'
            placeholder='Enter your name'
            required
          />
          <label>Phone Number</label>
          <input
            type='tel'
            name='phone'
            placeholder='Enter your mobile number'
            required
          />
          <label>Write your messages here</label>
          <textarea
            name='message'
            rows='6'
            placeholder='Enter your message'
            required
          ></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit now <img src={white_arrow} alt='btn pic' />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact;
