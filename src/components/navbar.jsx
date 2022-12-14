import Logo from '../img/logo3.webp'
import Music from './music'

import { useState } from 'react'
export default function Navbar ({
  currentSong,
  isPlaying,
  songInfo,
  audioRef,
  setCurrentSong,
  songs,
  singleArtist,
  timeUpdateHandler,
  songEndHandler,
  getTime,
  dragHandler,
  trackAnimation,
  skipTrackHandler,
  playSongHandler,
  setSongs,
  mutedSongHandler,
  isMuted,
  page,
  setPage
}) {
  const [showPlaylist, setShowPlaylist] = useState(false)

  return (
    <header className='w-full pl-1 md:pl-8 xl:pl-16 h-30 md:h-20 md:flex items-center'>
      <div className='flex w-full md:w-[40%] lg:w-[50%] justify-around'>
        <a href='/'><img className='w-[80px] mt-4 md:w-[120px] h-auto' src={Logo} alt='Logo' /><p className='text-transparent fixed'>.</p></a>
        <p onClick={() => setPage('home')} className={` ${page === 'home' ? 'text-white' : 'text-gray-200'} text-lg mt-5 font-normal cursor-pointer hover:text-white`}> Home </p>
        <p onClick={() => setPage('playlist')} className={` ${page === 'playlist' ? 'text-white' : 'text-gray-200'} text-lg mt-5 font-normal cursor-pointer hover:text-white`}> Playlist </p>
        <p className='text-lg mt-5 text-gray-200 font-normal cursor-pointer hover:text-white'> Upload </p>
      </div>
      <div className='mt-3 w-full md:w-[60%] ml-auto'>
        <h1><Music
          getTime={getTime}
          dragHandler={dragHandler}
          trackAnimation={trackAnimation}
          skipTrackHandler={skipTrackHandler}
          playSongHandler={playSongHandler}
          currentSong={currentSong}
          isPlaying={isPlaying}
          songInfo={songInfo}
          audioRef={audioRef}
          singleArtist={singleArtist}
          setShowPlaylist={setShowPlaylist}
          showPlaylist={showPlaylist}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          songs={songs}
          mutedSongHandler={mutedSongHandler}
          isMuted={isMuted}
            />
        </h1>
        <audio
          onTimeUpdate={(e) => timeUpdateHandler(e)}
          onLoadedMetadata={(e) => timeUpdateHandler(e)}
          onEnded={songEndHandler}
          ref={audioRef}
          src={currentSong.song}
        />
      </div>
    </header>
  )
}
