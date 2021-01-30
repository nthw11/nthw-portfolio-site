import React from 'react';

const Contact = () => {
  return (
    <div className='body contact-page'>
      <h1>contact me</h1>
      <form
        id='contact-form'
        // onSubmit={}
        method='POST'
      >
        <label htmlFor=''></label>
        <input type='text' id='name' placeholder='name' />
        <input type='email' id='email' placeholder='email address' />
        <input type='text' id='subject' placeholder='subject' />
        <input type='text' id='message' placeholder='message' />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
