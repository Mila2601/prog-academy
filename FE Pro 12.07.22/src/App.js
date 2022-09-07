import './App.css';
import { useState} from 'react';
import Products from './components/Products';
import Message from './components/AlertMessage';
import ProfileContext from './context/ProfileContext';
import MessageContext from './context/MessageContext';
import Header from './components/Header';
import Profile from './components/Profile';
import AboutUs from './components/static/AboutUs';
import NotFound from './components/static/NotFound';
import Footer from './components/Footer';
import AlertMessage from "./components/AlertMessage";
import Description from "./components/static/Description";
import SingleProduct from "./components/SingleProduct";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [profile, setProfile] = useState({login: '', email: ''});
  const [alertMessage, setAlertMessage] = useState({text: '', timeOfLive: 5});
  const answer = <b>Hello, greeting!</b>

  return (
    <div className='bg-dark d-flex flex-column' id='app'>      
      <ProfileContext.Provider value={{profile, setProfile}}>
        <MessageContext.Provider value={{setAlertMessage}}>
          <BrowserRouter>
            <Header>
              {answer}
              <Description />
            </Header>
            <Profile />
            <Routes>
              <Route path="/" element={<>
                  <Products /> 
                  <AlertMessage messageObj={alertMessage} />            
                </> 
              }>  
                <Route path=":productId" element={<SingleProduct />} />
              </Route>
              <Route path='/about-us' element={<AboutUs/>} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter> 
        </MessageContext.Provider>            
            <Footer />        
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
