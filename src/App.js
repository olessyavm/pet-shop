import './App.css';
import image from './catfood.jpg';
import image2 from './petfood.jpg'
import { Shop } from './Shop';

function App() {
  return (
    <div className='app'>
        <div className='container'>
        <img src={image} width='200px' alt='catfood'/>
      </div>
      <div className='container'>
        <h1>Pet Essentials</h1>
        
      </div>
      <Shop />

      <div className='container'>
      <img src={image2} width='200px' alt='petfood'/>
      </div>
      
    </div>
  );
}

export default App;
