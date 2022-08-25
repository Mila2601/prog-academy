import { Button, Form } from "react-bootstrap";
import { React, useContext, useRef} from 'react';
import ProfileContext from "../context/ProfileContext";

function Profile () {
    let loginRef = useRef(null);
    let emailRef = useRef(null);
    const {profile, setProfile} = useContext(ProfileContext);

    function saveProfile() {
        let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        console.log(reg.test(emailRef));
        // К сожалению тест всегда приводит к false. Я не придумала как правильно проверить имейл и проверяю просто по длине.
        if (loginRef.current.value.length > 2 && emailRef.current.value.length > 7) { 
            setProfile({login: localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).login.length ? 
                            JSON.parse(localStorage.getItem('profile')).login : 
                            loginRef.current.value, 
                        email: localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).email.length ? 
                            JSON.parse(localStorage.getItem('profile')).email : 
                            emailRef.current.value});
            localStorage.setItem('profile', JSON.stringify(profile));
            //emailRef.current.value = "";
            //loginRef.current.value = "";
            document.querySelector('.confirmation').classList.remove('d-none');
            document.querySelector('.formProfile').classList.add('d-none')} else {alert(`Введіть правильні логін та email-адресу`)}
    }

    return <div className="container">
        {localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).login.length ? 
            <p>{`Вітаємо, ${JSON.parse(localStorage.getItem('profile')).login}!`}</p> :
            <Form className="formProfile">
                <h3>Будь ласка, введіть свої данні:</h3>
                <Form.Control className="mt-4" 
                            type={'text'}
                            ref={loginRef} 
                            placeholder="Введіть свій логін"></Form.Control>
                <Form.Control className="mt-4" 
                            type={'email'} 
                            ref={emailRef} 
                            placeholder="Введіть вашу email-адресу"></Form.Control>
                <Button onClick={saveProfile} className="mt-4" variant={'success'}>Підтвердити</Button>
            </Form>}
        <div className="d-none confirmation mt-4">{`Дякуємо, ${profile.login}, Вашу адресу ${profile.email} було записано!`}</div>
    </div>
}

export default Profile;