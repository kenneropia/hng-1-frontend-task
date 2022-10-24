import { useState } from 'react';
import './App.css';
import Profile from './profile';

const App = () => {
  const [count, setCount] = useState(0);

  return (

    <div className='app'>
        <Profile />
    </div>

  
  );
};

export default App;
