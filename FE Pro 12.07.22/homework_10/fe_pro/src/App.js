import './App.css';
import { useState} from 'react';
import Products from './components/Products';
import Message from './components/Message';
import ProfileContext from './context/ProfileContext';
import MessageContext from './context/MessageContext';

function App() {
  const [profile, setProfile] = useState({login: '', email: ''});
  const [message, setMessage] = useState('');

  return (
    <div className='bg-dark p-4' id='app'>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <Products />
      </ProfileContext.Provider>
      <MessageContext.Provider value={{message, setMessage}}>          
          <Message />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
