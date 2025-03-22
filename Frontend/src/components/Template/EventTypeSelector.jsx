import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated for React Router v6

const EventTypeSelector = () => {
  const [eventType, setEventType] = useState('');
  const navigate = useNavigate(); // Updated to useNavigate()

  const handleSelection = (type) => {
    setEventType(type);
    // Navigate to the Event Template Selector page
    navigate(`/create-event/${type}`); // Updated to use navigate()
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Select the type of event you want to create</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => handleSelection('concert')}
            className="flex flex-col items-center bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg shadow-lg transition duration-300"
          >
            <img
              src="https://imgs.search.brave.com/aD86grPrsuMenm35M-zYz37oBFXEjaVXIegrsiJnHco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NjM0ODg3L3Bob3Rv/L3JvY2stY29uY2Vy/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NTU3ZmVHYU1v/eG1VcGRnOHdaQ0J2/T3pQcXlMaC01c1ZI/TW9sRlZDeU9PYz0"
              alt="Concert"
              className="h-24 w-24 object-cover mb-4 rounded-full"
            />
            <p className="text-lg font-semibold">Concert</p>
          </button>
          <button
            onClick={() => handleSelection('standup')}
            className="flex flex-col items-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg shadow-lg transition duration-300"
          >
            <img
              src="https://imgs.search.brave.com/UAqAt0mrLh9GDL1uEBDuLUFn79OczRappRUguR6ULy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzIyLzYwLzgx/LzM2MF9GXzEyMjYw/ODE5Nl9wc2JwUVRx/T2pYZDBSN2MyRGFY/SlpFNm9Id0FCMUtH/Zy5qcGc"
              alt="Standup"
              className="h-24 w-24 object-cover mb-4 rounded-full"
            />
            <p className="text-lg font-semibold">Standup</p>
          </button>
          <button
            onClick={() => handleSelection('hackathon')}
            className="flex flex-col items-center bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg shadow-lg transition duration-300"
          >
            <img
              src="https://imgs.search.brave.com/mtpXYAhuWt2gJnhkNuupJHrPG3aO0QsoxamRdn9e818/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc4/ODE1OTk2NS9waG90/by9kZXZlbG9wZXJz/LWluLWEtY293b3Jr/aW5nLXNwYWNlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz00/MDVkTThpa2NweC1v/OWlTMnhzOVJMcGVq/Vjk3WVNWQi1qcEdo/LXgtYlFNPQ"
              alt="Hackathon"
              className="h-24 w-24 object-cover mb-4 rounded-full"
            />
            <p className="text-lg font-semibold">Hackathon</p>
          </button>
          <button
            onClick={() => handleSelection('fest')}
            className="flex flex-col items-center bg-yellow-500 hover:bg-yellow-600 text-white p-4 rounded-lg shadow-lg transition duration-300"
          >
            <img
              src="https://imgs.search.brave.com/iAfNzYah-oOv2AccyQQgp8UppS3Wp-z51-Cj3UmnwzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODc0/NzQ3MDY2L3Bob3Rv/L211c2ljLWZlc3Rp/dmFsLWNyb3dkLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1V/bmREdUY5bkJNS3Yy/MVh5UWhOeXpoYW0z/dmFTa09sR2lvdTAy/TUZPd2ZVPQ"
              alt="Fest"
              className="h-24 w-24 object-cover mb-4 rounded-full"
            />
            <p className="text-lg font-semibold">Fest</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventTypeSelector;
