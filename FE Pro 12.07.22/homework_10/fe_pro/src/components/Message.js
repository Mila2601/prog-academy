import MessageContext from "../context/MessageContext";
import { useContext } from 'react';

function Message () {
    const {message} = useContext(MessageContext);
    return <div className="message d-none">{message}</div>
}

export default Message;