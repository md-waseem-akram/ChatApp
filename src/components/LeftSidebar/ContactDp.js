import React from "react";

//This Component is for Contact DP
function ContactAvatar({ image }) {
  return (
    <div>
      <img src={image} alt="user-avatar" className="avatar" />
    </div>
  );
}

export default ContactAvatar;