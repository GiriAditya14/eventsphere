import React from 'react';
import EventCard from './EventCard';
import Loading from './Loading';

const EventList = ({ events, loading, error }) => {
  const dummyEvents = [
    {
      id: 1,
      title: "ReactJS Workshop",
      date: "2025-04-01",
      description: "A workshop on ReactJS for beginners.",
      organizer: "Chaitanya Sharma",
      location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
    },
    {
      id: 2,
      title: "JavaScript Masterclass",
      date: "2025-04-10",
      description: "Learn advanced JavaScript concepts.",
      organizer: "Chaitanya Sharma",
      location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
    },
    {
      id: 3,
      title: "Node.js Meetup",
      date: "2025-04-15",
      description: "Meetup for Node.js enthusiasts.",
      organizer: "Chaitanya Sharma",
      location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      date: "2025-04-20",
      description: "A 2-day bootcamp on web development.",
      organizer: "Chaitanya Sharma",
      location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
    },
  ];

  // Merge the events passed via props with the dummy events
  const eventList = (events && events.length > 0) ? [...events, ...dummyEvents] : dummyEvents;

  if (loading) return <Loading />;
  
  if (error) return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
      <p>{error}</p>
    </div>
  );
  
  if (eventList.length === 0) return (
    <div className="text-center py-12">
      <h3 className="text-xl text-gray-600">No events found</h3>
      <p className="mt-2 text-gray-500">Check back later or create your own event!</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventList.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;

// import React from "react";
// import EventCard from "./EventCard";
// import Loading from "./Loading";

// const EventList = ({ events, loading, error }) => {
//   const dummyEvents = [
//     {
//       id: 1,
//       title: "ReactJS Workshop",
//       date: "2025-04-01",
//       description: "A workshop on ReactJS for beginners.",
//       organizer: "Chaitanya Sharma",
//       location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
//     },
//     {
//       id: 2,
//       title: "JavaScript Masterclass",
//       date: "2025-04-10",
//       description: "Learn advanced JavaScript concepts.",
//       organizer: "Chaitanya Sharma",
//       location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
//     },
//     {
//       id: 3,
//       title: "Node.js Meetup",
//       date: "2025-04-15",
//       description: "Meetup for Node.js enthusiasts.",
//       organizer: "Chaitanya Sharma",
//       location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
//     },
//     {
//       id: 4,
//       title: "Web Development Bootcamp",
//       date: "2025-04-20",
//       description: "A 2-day bootcamp on web development.",
//       organizer: "Chaitanya Sharma",
//       location: "Dhruv, March 25, 2025 - 4:20 PM, Vidisha",
//     },
//   ];
//   const eventList =
//   if (loading) return <Loading />;

//   if (error)
//     return (
//       <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
//         <p>{error}</p>
//       </div>
//     );

//   if (events.length === 0)
//     return (
//       <div className="text-center py-12">
//         <h3 className="text-xl text-gray-600">No events found</h3>
//         <p className="mt-2 text-gray-500">
//           Check back later or create your own event!
//         </p>
//       </div>
//     );

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {events.map((event) => (
//         <EventCard key={event._id} event={event} />
//       ))}
//     </div>
//   );
// };

// export default EventList;
