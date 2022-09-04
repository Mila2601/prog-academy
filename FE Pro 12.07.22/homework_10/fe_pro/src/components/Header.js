import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";
import { Button } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function Header () {
  const { profile, setProfile } = useContext(ProfileContext);

  function logOut () {
    setProfile({login: '', email: ''});
    localStorage.removeItem('profile');
  }

  return <div className="bg-warning">
    <div className="container d-flex justify-content-between">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link" to="../">Головна<span class="sr-only">(current)</span></Link>
            <Link class="nav-item nav-link" to="/about-us">Про нас</Link>
            <Link class="nav-item nav-link" to="/*">Сторінку не знайдено</Link>
          </div>
        </div>
      </nav> 
      {profile.login.length ? 
            <div className="d-flex align-items-baseline">
                <p className="p-3 m-0">{`Вітаємо, ${profile.login}!`}</p> 
                <Button className="logout" onClick={logOut} variant='primary'>Вийти</Button>
            </div> : ''}  
    </div>
  </div>
}

export default Header;