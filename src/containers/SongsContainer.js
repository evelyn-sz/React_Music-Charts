import React, {useState, useEffect} from 'react';
import SongArray from '../components/SongArray';
import SongDetails from '../components/SongDetails';

const SongsContainer = () => {

  const [songs, setSongs] = useState({});

  const [loaded, setLoaded] = useState(false);

  const getSongs = () => {
    console.log("fetching music info");
    fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
    .then(res => res.json())
    .then(data => setSongs(data))
    // .then(data => setSongs(data.feed.entry))
    .then(() => setLoaded(true))
  }

  useEffect(() => {
    getSongs();
  }, [])

  return(
    <>
      <h1> Songs </h1>
      <SongArray
      songs={songs}/>
      <SongDetails
      songs={songs}
      loaded={loaded}/>
    </>
  )
}

export default SongsContainer;