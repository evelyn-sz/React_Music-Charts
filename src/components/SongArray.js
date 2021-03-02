import React from 'react';
import SongDetails from '../components/SongDetails';

const SongArray = ({songs}) => {
  const top20 = songs.map((song) => {
    return <SongDetails title={song.title} key={song.id.attributes['im:id']} ></SongDetails>
  }) 
  return(
    <ul>
      {top20}
    </ul>
  )
}

export default SongArray;


