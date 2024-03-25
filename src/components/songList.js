import React from "react";

import { useDispatch } from "react-redux";

import { songs } from "../data/songData";

import { clicked_song } from "../redux/actions/songActions";

const SongList = () => {
  // console.log(songs);

  const dispatch = useDispatch();
  // sending the click song details tostore

  return (
    <div>
      {
        // songs.map((e)=>(<p onClick={dispatch(clicked_song(e))} className='songs' key={e.id}>
        //     {e.title}
        //     </p>)) 
        songs.map((song) => (
        
            <p
              onClick={() => dispatch(clicked_song(song))}
              className="songs"
              key={song.id}
            >
              {song.title}
            </p>
          ))
      }
    </div>
  );
};

export default SongList;
