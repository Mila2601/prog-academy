import { useContext, useEffect } from "react";
import MessageContext from "../context/MessageContext";

function TimeCounter () {
    const { messageArr, message } = useContext(MessageContext);

    useEffect( () => {
        setInterval(() => {messageArr.forEach(element => {        
            if (element.timeOfLive > 0) {element.timeOfLive = element.timeOfLive - 1}
            else {messageArr.shift();
            console.log(`shift`)};
        });}, 1000);

    }, [message]);
}

export default TimeCounter;