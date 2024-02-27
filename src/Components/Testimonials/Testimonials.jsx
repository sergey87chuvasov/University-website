import './Testimonials.css';

import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

function Testimonials() {
  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_icon} alt='next-btn-pic' />
      <img className='back-btn' src={back_icon} alt='back-btn-pic' />
      <div className='slider'>
        <ul>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='user pic' />
                <div>
                  <h3>Kasey Thorn</h3>
                  <span>Edusity, CAN</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                explicabo id quidem facilis quo, consequuntur, nam quisquam hic
                nemo dolores sapiente eaque debitis ab. Nisi voluptatibus
                blanditiis eveniet at commodi!
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt='user pic' />
                <div>
                  <h3>Serge Rfet</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                explicabo id quidem facilis quo, consequuntur, nam quisquam hic
                nemo dolores sapiente eaque debitis ab. Nisi voluptatibus
                blanditiis eveniet at commodi!
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt='user pic' />
                <div>
                  <h3>Monica Pretyy</h3>
                  <span>Edusity, FRA</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                explicabo id quidem facilis quo, consequuntur, nam quisquam hic
                nemo dolores sapiente eaque debitis ab. Nisi voluptatibus
                blanditiis eveniet at commodi!
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt='user pic' />
                <div>
                  <h3>Tom Gray</h3>
                  <span>Edusity, BRA</span>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                explicabo id quidem facilis quo, consequuntur, nam quisquam hic
                nemo dolores sapiente eaque debitis ab. Nisi voluptatibus
                blanditiis eveniet at commodi!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
