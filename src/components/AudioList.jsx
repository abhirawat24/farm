import React from 'react';
import songdata from '../utils/songdata.json';

const AudioList = () => {
  console.log("Songs data", songdata); // Logs song data to the console for debugging

  // Destructure the data for easy access and handling possible undefined data
  const { audio_lists } = songdata || {};
  const { free_audio_list = [], paid_audio_list = [] } = audio_lists || {};

  return (
    <div className="container p-4 rounded-lg shadow-lg mt-20 w-full">
      {/* Free Audio Section */}
      <div className="freeAudio mb-8" id='freeAudio'>
        <h2 className="text-2xl font-semibold mb-4">Free Audio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {free_audio_list.length > 0 ? (
            free_audio_list.map((track, index) => (
              <div key={`${track.title}-${index}`} className="audioItem bg-white p-4 rounded-lg shadow-md">
                <img src={track.image_url} alt={track.title} className="w-full h-[200px] object-cover rounded-lg mb-4" />
                <p className="text-lg font-medium">{track.title} by {track.artist}</p>
              </div>
            ))
          ) : (
            <p>No free audio available.</p>
          )}
        </div>
      </div>

      {/* Premium Audio Section */}
      <div className="premiumAudio" id='premiumAudio'>
        <h2 className="text-2xl font-semibold mb-4">Premium Audio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paid_audio_list.length > 0 ? (
            paid_audio_list.map((track, index) => (
              <div key={`${track.title}-${index}`} className="audioItem bg-white p-4 rounded-lg shadow-md">
                <img src={track.image_url} alt={track.title} className="w-full h-[200px] object-cover rounded-lg mb-4 p-8" />
                <p className="text-lg font-medium">{track.title} by {track.artist}</p>
              </div>
            ))
          ) : (
            <p>No premium audio available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioList;
