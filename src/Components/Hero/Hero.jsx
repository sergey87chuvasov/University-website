import './Hero.css';

import dark_arrow from '../../assets/dark-arrow.png';

function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          dolorem ipsum labore at nisi saepe maiores voluptas mollitia!
          Aspernatur ullam nihil officia perferendis eveniet optio ex quasi
          provident amet inventore?
        </p>
        <button className='btn'>
          Explore more <img src={dark_arrow} alt='arrow pic' />
        </button>
      </div>
    </div>
  );
}

export default Hero;
