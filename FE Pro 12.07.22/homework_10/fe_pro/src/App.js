import './App.css';
import Products from './components/Products';
import ProfileContext from './context/ProfileContext';
import { useState, useEffect } from 'react';

function App() {
  const [profile, setProfile] = useState({login: '', email: ''});

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if(savedProfile?.login?.length) {setProfile(savedProfile)}
    }, [])
  return (
    <div className='bg-dark p-4' id='app'>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <Products />
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
