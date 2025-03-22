import React from 'react';
import { useParams } from 'react-router-dom';

const EventTemplateSelector = () => {
  const { eventType } = useParams();

  const getEventTemplates = (type) => {
    switch (type) {
      case 'concert':
        return [
          { id: 1, title: 'Basic Concert Template' },
          { id: 2, title: 'VIP Concert Template' },
        ];
      case 'standup':
        return [
          { id: 3, title: 'Comedy Standup Template' },
          { id: 4, title: 'Standup Show Template' },
        ];
      case 'hackathon':
        return [
          { id: 5, title: 'Hackathon Template' },
          { id: 6, title: 'Coding Challenge Template' },
        ];
      case 'fest':
        return [
          { id: 7, title: 'Festival Template' },
          { id: 8, title: 'Music Fest Template' },
        ];
      default:
        return [];
    }
  };

  const templates = getEventTemplates(eventType);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Select a template for your {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
        </h2>
        
        {/* Template Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div key={template.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-medium text-gray-700 mb-4">{template.title}</h3>
              <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200">
                Use Template
              </button>
            </div>
          ))}
        </div>

        {/* Custom Template */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Or create your own custom template</h3>
          <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-200">
            Create Custom Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventTemplateSelector;
