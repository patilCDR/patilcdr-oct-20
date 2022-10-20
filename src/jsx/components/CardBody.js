import React, { useEffect, useState } from 'react';

const CardBody = () => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    if (e.target.value.length >= 250) {
      return;
    } else {
      setMessage(e.target.value);
    }
  };

  return (
    <div className='ml-0 ml-md-4 cus-card-body'>
      <textarea
        placeholder="What's happening?"
        className={`custom-textarea ${message.length >= 250 && 'text-limit'}`}
        onChange={handleChange}
      ></textarea>
      <span className='text-counter'>{message.length}/250</span>
    </div>
  );
};

export default CardBody;
