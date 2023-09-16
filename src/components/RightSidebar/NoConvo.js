import React from "react";
import "../stylesheets/rightSidebar.css";

//If no conversation has started it will desplay below message
function NoConvo() {
  return (
    <div className="no-chat-background">
      <h2 style={{  margin: "5rem" }}>Let's Chat!!!</h2>
    </div>
  );
}

export default NoConvo;