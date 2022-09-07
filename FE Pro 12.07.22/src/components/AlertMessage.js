import {Alert} from 'react-bootstrap';
import {useContext, useEffect} from "react";
import MessageContext from "../context/MessageContext";
import './AlertMessage.css';

function AlertMessage({messageObj}) {
  const {setAlertMessage} = useContext(MessageContext);
  useEffect(() => {
    const timer = setTimeout(() => setAlertMessage({text: ''}), 3000);
    return () => clearTimeout(timer);
  }, [messageObj]);

  return <div>
    {messageObj.text.length ? <div className={'alert-fixed position-fixed'} style={{right: '1rem', bottom: '-5rem', zIndex: 3}}>
      <Alert variant={messageObj.variant || 'success'}>{messageObj.text}</Alert>
    </div> : ''}
    </div>
}

export default AlertMessage;