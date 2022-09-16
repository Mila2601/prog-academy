import { useContext, useEffect } from "react";
import MessageContext from "../context/MessageContext";

function TimeCounter () {
    const { setAlertMessage, alertMessage } = useContext(MessageContext);

    useEffect( () => {
        setInterval(() => {alertMessage.forEach(element => {        
            if (element.timeOfLive > 0) {element.timeOfLive = element.timeOfLive - 1}
            // else {setAlertMessage(alertMessage.filter((el) => {el.timeOfLive > 0}))
            // console.log(`shift`)};
        });}, 1000);
    }, []);
}

export default TimeCounter;