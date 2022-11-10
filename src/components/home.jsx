import Navbar from './navbar'
import UseSongHandler from '../hooks/useSongHandler'
import '../styles/global.css'
import UsePlayer from '../hooks/usePlayer'

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
    setSongs,
    singleArtist,
    setSingleArtist,
    timeUpdateHandler,
    activeLibraryHandler,
    setCurrentSong,
    artists,
    setArtists,
    setIndex
  } = UseSongHandler()
  const {
    skipArtistHandler,
    getTime,
    dragHandler,
    trackAnimation,
    skipTrackHandler,
    playSongHandler
  } = UsePlayer({
    setSongInfo,
    audioRef,
    setCurrentSong,
    songs,
    setSongs,
    activeLibraryHandler,
    setIsPlaying,
    currentSong,
    songInfo,
    isPlaying,
    artists,
    singleArtist,
    setSingleArtist,
    setIndex
  })

  return (
    <div>
      <Navbar
        getTime={getTime}
        skipTrackHandler={skipTrackHandler}
        dragHandler={dragHandler}
        trackAnimation={trackAnimation}
        playSongHandler={playSongHandler}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
        songs={songs}
        singleArtist={singleArtist}
        setSingleArtist={setSingleArtist}
        activeLibraryHandler={activeLibraryHandler}
        setCurrentSong={setCurrentSong}
        timeUpdateHandler={timeUpdateHandler}
        songEndHandler={songEndHandler}
        artists={artists}
        setArtists={setArtists}
        setIndex={setIndex}
      />

      <div className='text-white flex gap-8'>
        <button className='px-8 py-3 bg-red-700' onClick={() => skipArtistHandler('skip-back')}> - </button>
        <button className='px-8 py-3 bg-green-700' onClick={() => skipArtistHandler('skip-forward')}> + </button>
      </div>
    </div>
  )
}
