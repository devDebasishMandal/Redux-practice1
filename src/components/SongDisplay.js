import React from 'react'
import { useSelector } from 'react-redux';




const SongDisplay = () => {


const songDetail= useSelector((state) => (state.song));

console.log(songDetail);


    
  return (
    <div>
      {/* <h4>{songDetail}</h4> */}
      <h1>Song details</h1>
      {songDetail && (
        <div>
          <h2>{songDetail.title}</h2>
          <p>Artist: {songDetail.artist}</p>
          <p>Album: {songDetail.album}</p>
          <p>Duration: {songDetail.duration}</p>
        </div>
      )}
    </div>
  );
}

export default SongDisplay;