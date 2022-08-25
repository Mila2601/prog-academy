import { Button, Form } from "react-bootstrap";
import { React, useRef} from 'react'

function Profile () {
    let loginRef = useRef(null);
    let emailRef = useRef(null);

    function saveProfile() {
        setProfile({login: localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).login.length ? 
                           JSON.parse(localStorage.getItem('profile')).login : 
                           loginRef.current.value, 
                    email: localStorage.getItem('profile') && JSON.parse(localStorage.getItem('profile')).email.length ? 
                           JSON.parse(localStorage.getItem('profile')).email : 
                           emailRef.current.value});
        localStorage.setItem('profile', JSON.stringify(profile));
        emailRef.current.value = "";
        loginRef.current.value = "";
    }

    return <div className="container">
        <Form>
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
        </Form>
    </div>
}

export default Profile;