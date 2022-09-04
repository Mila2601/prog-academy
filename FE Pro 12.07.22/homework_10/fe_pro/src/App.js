import './App.css';
import { useState} from 'react';
import Products from './components/Products';
import Message from './components/Message';
import ProfileContext from './context/ProfileContext';
import MessageContext from './context/MessageContext';
import Header from './components/Header';
import Profile from './components/Profile';
import AboutUs from './components/static/AboutUs';
import NotFound from './components/static/NotFound';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [profile, setProfile] = useState({login: '', email: ''});
  const [message, setMessage] = useState('');
  const messageArr = [];

  return (
    <div className='bg-dark d-flex flex-column' id='app'>      
      <ProfileContext.Provider value={{profile, setProfile}}>
        <MessageContext.Provider value={{message, setMessage, messageArr}}>
          <BrowserRouter>
            <Header/>
            <Profile />
            <Routes>
              <Route path="/" element={<>
                  <Products />             
                </> 
              } />           
              <Route path='/about-us' element={<AboutUs/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter> 
          <Message /> 
        </MessageContext.Provider>            
            <Footer />        
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
