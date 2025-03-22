import React, { useState } from 'react';

const CustomTemplate = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like saving the template
    alert('Custom event template created!');
  };

  return (
    <div className="custom-template">
      <h2>Create Your Custom Event Template</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Name:
          <input 
            type="text" 
            value={eventName} 
            onChange={(e) => setEventName(e.target.value)} 
            required
          />
        </label>
        <label>
          Event Date:
          <input 
            type="date" 
            value={eventDate} 
            onChange={(e) => setEventDate(e.target.value)} 
            required
          />
        </label>
        <label>
          Event Description:
          <textarea 
            value={eventDescription} 
            onChange={(e) => setEventDescription(e.target.value)} 
            required
          />
        </label>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CustomTemplate;
