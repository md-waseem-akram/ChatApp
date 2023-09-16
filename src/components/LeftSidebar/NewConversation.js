import React from "react";

//This component is for New conversation 
function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo">
      <button className="btn btn-primary mx-2 my-2" onClick={handleClick}>New Conversation <i className="fas fa-plus"></i></button>
    </div>
  );
}

export default NewConversation;