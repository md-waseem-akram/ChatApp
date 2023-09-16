import React from "react";

//This component is for Contact's last message 
function ContactLastMessage(props) {
  return (
    <div className="contactText">
      <p> {props.chatlog.text}</p>
    </div>
  );
}

export default ContactLastMessage;