import {Alert} from 'react-bootstrap';
import {useContext, useEffect} from "react";
import MessageContext from "../context/MessageContext";
import './AlertMessage.css';

function AlertMessage({messageObj, messageArray}) {
  const {setAlertMessage} = useContext(MessageContext);

  useEffect(() => {
    const timer = setTimeout(() => setAlertMessage({text: ''}), 3000);
    return () => clearTimeout(timer);
  }, [messageObj]);

  return <div>
    {messageObj.text.length ? <ul className={'position-fixed'} style={{right: '1rem', bottom: '-1rem', zIndex: 3}}>
      {messageArray.map( el => <li key={el.text}><Alert className={'alert-fixed'} variant={el.variant || 'success'}>{el.text}</Alert></li>)}
    </ul> : ''}
    </div>
}

export default AlertMessage;