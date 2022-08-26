import { Button, Form } from "react-bootstrap";
import { React, useContext, useEffect, useRef} from 'react';
import ProfileContext from "../context/ProfileContext";

function Profile () {
    let loginRef = useRef(null);
    let emailRef = useRef(null);
    const {profile, setProfile} = useContext(ProfileContext);

    function saveProfile() {
        let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (loginRef.current.value.length > 2 && emailRef.current.value.length > 7) {
            setProfile({login: profile.login.length === 0 ? loginRef.current.value : profile.login, 
                        email: profile.email.length === 0 ? emailRef.current.value : profile.email});
            console.log(profile);
            localStorage.setItem('profile', JSON.stringify(profile));
            document.querySelector('.confirmation').classList.remove('d-none');
            document.querySelector('.formProfile').classList.add('d-none')} else {alert(`Введіть правильні логін та email-адресу`)}
    }

    return <div className="container">
        {profile && profile.login.length ? 
            <p>{`Вітаємо, ${profile.login}!`}</p> :
            <Form className="formProfile">
                <h3>Будь ласка, введіть свої данні:</h3>
                <Form.Control className="mt-4" 
                            type={'text'}
                            ref={loginRef} 
                            defaultValue={profile.login}
                            placeholder="Введіть свій логін"></Form.Control>
                <Form.Control className="mt-4" 
                            type={'email'} 
                            ref={emailRef} 
                            defaultValue={profile.email}
                            placeholder="Введіть вашу email-адресу"></Form.Control>
                <Button onClick={saveProfile} className="mt-4" variant={'success'}>Підтвердити</Button>
            </Form>}
        <div className="d-none confirmation mt-4">{`Дякуємо, ${profile.login}, Вашу адресу ${profile.email} було записано!`}</div>
    </div>
}

export default Profile;