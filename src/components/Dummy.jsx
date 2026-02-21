import React, { useState } from 'react';
import kevinRushProfile from '../assets/kevinRushProfile.png';

function Dummy() {
  const ach = {
    event: "Panimalar International Conference",
    project: "Farm Cult",
    description: "Dummy text",
    cert_path: kevinRushProfile
  };

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="bg-template-achievement p-6 rounded shadow text-white flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold">{ach.event}</h1>

        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-medium">Project</h2>
          <p>{ach.project}</p>
        </div>

        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-medium">Description</h2>
          <p className="whitespace-pre-line">{ach.description}</p>
        </div>

        <img
          onClick={handleVisibility}
          src={ach.cert_path}
          alt="Certificate Thumbnail"
          className="w-1/2 h-auto rounded border border-white cursor-pointer hover:opacity-75 transition"
        />
      </div>

      {/* Modal Overlay */}
      {visible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 w-[80%] max-w-3xl">
            <button
              className="absolute top-2 right-2 text-black font-bold"
              onClick={handleVisibility}
            >
              ✕
            </button>
            <img
              src={ach.cert_path}
              alt="Certificate"
              className="max-h-96 w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dummy;
