import React from 'react';

const SongDetails = ({song, loaded}) => {

  if (!loaded) {
    return <p>Loading...</p>
  }

  return(
    <>
      <h3>{song.name}</h3>
    </>
  )
}

export default SongDetails;

