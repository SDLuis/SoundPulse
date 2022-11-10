import Navbar from './navbar'
import UseSongHandler from '../hooks/useSongHandler'
import '../styles/global.css'

export default function Home () {
  const {
    songEndHandler,
    setIsPlaying,
    currentSong,
    isPlaying,
    songInfo,
    setSongInfo,
    audioRef,
    songs,
    artist,
    timeUpdateHandler,
    activeLibraryHandler,
    setCurrentSong
  } = UseSongHandler()
  return (
    <div>
      <Navbar
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        songs={songs}
        artist={artist}
        activeLibraryHandler={activeLibraryHandler}
        setCurrentSong={setCurrentSong}
        timeUpdateHandler={timeUpdateHandler}
        songEndHandler={songEndHandler}
      />
    </div>
  )
}
