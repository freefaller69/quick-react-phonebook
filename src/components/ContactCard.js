import React from 'react';

const ContactCard = ({ contact }) => {
  return (
    <div className='ui card'>
      <div className='content'>Name: {contact.lastName}, {contact.firstName}</div>
      <div className='content'>Phone number: {contact.phoneNumber}</div>
    </div>
  );
};

export default ContactCard;
