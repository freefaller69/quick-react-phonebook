import React from 'react';
import './ContactList.css';
import ContactCard from './ContactCard';

const sortContacts = (a, b) => {
    const lastNameA = a.lastName.toLowerCase();
    const lastNameB = b.lastName.toLowerCase();
  
    let comparison = 0;
    if (lastNameA > lastNameB) {
      comparison = 1;
    } else if (lastNameA < lastNameB) {
      comparison = -1;
    }
    return comparison;
};

const ContactList = ({ contacts = []}) => {
  if (!contacts.length) {
    return <div className="contact-list">No contacts in phone book</div>
  }

  contacts.sort(sortContacts);

  const contactList = contacts.map((contact) => {
    return <ContactCard key={contact.id} contact={contact} />
  })
  return <div className="ui cards contact-list">{contactList}</div>
};

export default ContactList;