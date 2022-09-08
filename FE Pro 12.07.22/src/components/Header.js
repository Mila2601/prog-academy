import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";
import { Button } from "react-bootstrap";
import {
  Link
} from "react-router-dom";

function Header (props) {
  const { profile, setProfile } = useContext(ProfileContext);

  function logOut () {
    setProfile({login: '', email: ''});
    localStorage.removeItem('profile');
  }

  return <div className="bg-warning">
    <div className="container d-flex justify-content-between">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="../products">Головна<span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/about-us">Про нас</Link>
            <Link className="nav-item nav-link" to="/*">Сторінку не знайдено</Link>
          </div>
        </div>
      </nav> 
      <ul>{props.children.map((el, ind) => <li key={ind}>{el}</li>)}</ul>
      {profile.login.length ? 
            <div className="d-flex align-items-baseline">
                <p className="p-3 m-0">{`Вітаємо, ${profile.login}!`}</p> 
                <Button className="logout" onClick={logOut} variant='primary'>Вийти</Button>
            </div> : ''}  
    </div>
  </div>
}

export default Header;