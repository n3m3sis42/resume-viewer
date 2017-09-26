import React from 'react'

const ContactDetails = ({ data }) => {

  if (!data) {
    return <div></div>
  }

  const { name, phone, email } = data

  return (
    <div className="columns contact-details">
       <h2>Contact Details</h2>
       <p className="address">
         <span>{name}</span><br />
         <span>{phone}</span><br />
         <span>
            <a href={`mailto:${email}`}>{email}</a>
          </span>
       </p>
    </div>
  )
}

export default ContactDetails
