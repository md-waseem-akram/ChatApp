import React from "react";

//This component is for ContactName
function ContactName({ name }) {
  return (
    <div>
      <p style={styles.contactText}>{name}</p>
    </div>
  );
}

//Styling for this component
const styles = {
  contactText: {
    fontSize: "16px",
    color: "#000",
    marginBottom: "3px",
  },
};
export default ContactName;