import './Contact.css';

import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';

function Contact() {
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
      <div className='contact-col'></div>
    </div>
  );
}

export default Contact;
