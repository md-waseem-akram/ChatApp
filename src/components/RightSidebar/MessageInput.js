import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Resetting input value when the contact component changes
    setMessage("");
  }, [setMessage, props]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Message can not be empty");
    }
    setMessage("");
    
    // scroll to the bottom
  };
  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={5}>
          <input
            type="text"
            placeholder="Type Message here..."
            value={message}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={3} lg={40}>
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;