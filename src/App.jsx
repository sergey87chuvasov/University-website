import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Programs />
      </div>
    </div>
  );
}

export default App;
