/* eslint-disable react/jsx-closing-tag-location */
import Navbar from './navbar'
import UseSongHandler from '../hooks/useSongHandler'
import '../styles/global.css'
import UsePlayer from '../hooks/usePlayer'
import { BigLeft, BigRight } from '../components/icons'
import Info from './info'
import PagePlaylist from './pagePlaylist'

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
    playSongHandler,
    mutedSongHandler,
    isMuted,
    page,
    setPage,
    audios
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
  const css =
  `@media (max-width: 767px) {.backimage { background-image: url(${singleArtist.smallbg}) }}   
   @media (min-width: 768px) {.backimage { background-image: url(${singleArtist.bg}) }}`
  return (
    <div>
      <style scoped>{css}</style>
      <div className='h-screen backimage transform-cpu transition-all delay-200 duration-500 ease-in-out bg-center bg-cover bg-no-repeat'>
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
          mutedSongHandler={mutedSongHandler}
          isMuted={isMuted}
          page={page}
          setPage={setPage}
        />
        <div>
          {
          page === 'home'
            ? <div>
              <Info singleArtist={singleArtist} />
            </div>
            : <div className='text-white grid place-items-center h-[80vh] font-bold'>
              <PagePlaylist
                audios={audios}
                songs={songs}
                singleArtist={singleArtist}
                setSongs={setSongs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSingleArtist={setSingleArtist}
              /></div>
          }
          <div>
            <span className='bg-transparent cursor-pointer fixed left-0 md:left-2 top-[50%] z-10 focus:outline-none hover:scale-[1.1] transition-all duration-100 ease-in-out' onClick={() => skipArtistHandler('skip-back')}> <BigLeft color='white' /> </span>
            <span className='bg-transparent cursor-pointer fixed right-0 md:right-2 top-[50%] z-10 focus:outline-none hover:scale-[1.1] transition-all duration-100 ease-in-out' onClick={() => skipArtistHandler('skip-forward')}> <BigRight color='white' /> </span>
          </div>
        </div>
      </div>
    </div>
  )
}
