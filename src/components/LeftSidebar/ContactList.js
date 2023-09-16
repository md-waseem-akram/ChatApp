import React from "react";
import ContactTab from "./ContactTab";

//This Component is for Contact List
function ContactList({ contacts }) {
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
//This is the styling for ContactList
const styles = {
  contactList: {
    overflowY: "scroll",
    height: "80vh",
    zIndex: "2",
    backgroundColor: "#fff",
  },
};
export default ContactList;