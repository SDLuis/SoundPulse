import Navbar from './navbar'
import UseSongHandler from '../hooks/useSongHandler'
import '../styles/global.css'
import UsePlayer from '../hooks/usePlayer'
import { BigLeft, BigRight } from '../components/icons'

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
        setSongs={setSongs}
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

      <div className='h-[80vh] w-[99vw] flex items-center justify-between'>
        <button className='px-8 py-3 bg-transparent hover:scale-[1.1] transition-all duration-100 ease-in-out' onClick={() => skipArtistHandler('skip-back')}> <BigLeft color={singleArtist.color} /> </button>
        <button className='px-8 py-3 bg-transparent hover:scale-[1.1] transition-all duration-100 ease-in-out' onClick={() => skipArtistHandler('skip-forward')}> <BigRight color={singleArtist.color} /> </button>
      </div>
    </div>
  )
}
