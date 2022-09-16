import { Button, Form } from "react-bootstrap";
import { React, useContext, useEffect, useRef, useState} from 'react';
import ProfileContext from "../context/ProfileContext";
import MessageContext from "../context/MessageContext";
import { Navigate } from "react-router-dom";


function Profile () {
    let loginRef = useRef(null);
    let emailRef = useRef(null);
    const {profile, setProfile} = useContext(ProfileContext);
    const {setMessage} = useContext(MessageContext);
    const [isProfileSaved, setIsProfileSaved] = useState(false);
    const {setAlertMessage} = useContext(MessageContext);
    
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if(savedProfile?.login?.length) {setProfile(savedProfile)}
  }, [])

    function saveProfile() {
        const savingProfile = {login: loginRef.current.value, email: emailRef.current.value};
        let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (loginRef.current.value.length > 4 && reg.test(emailRef.current.value)) {
            setProfile(savingProfile);
            localStorage.setItem('profile', JSON.stringify(savingProfile));
            document.querySelector('.formProfile').classList.add('d-none');
            document.querySelector('.message').classList.remove('d-none');
            setAlertMessage({text: 'Вітаємо, ' + savingProfile.login});
        } else {
            alert(`Введіть правильні логін та email-адресу`)
        }
        setIsProfileSaved(true);
    }

    return <div className="container bg-white py-2">
        {!profile.login.length ? 
            <Form className="formProfile ">
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
                <Button onClick={saveProfile} className="mt-4 mb-4" variant={'success'}>Підтвердити</Button>
            </Form> : ""}
            {isProfileSaved ? <Navigate to="/" /> : ''}
    </div>
}

export default Profile;