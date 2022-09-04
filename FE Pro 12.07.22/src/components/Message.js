import MessageContext from "../context/MessageContext";
import { useContext } from 'react';

function Message () {
  const { message, messageArr } = useContext(MessageContext);

  messageArr.push({message: `${message}`, timeOfLive: 5});
  console.log(`arr is ${JSON.stringify(messageArr)}`);

  let str = messageArr.reduce((acc, element) => {
    return acc = acc + element.message
  }, '');
    
  return <div className="message">{str}</div>
}

export default Message;