import { Pause, Play, Left, Right, Volume, Muted, Menu } from './icons'
import Library from './library'
export default function Music ({
  currentSong,
  isPlaying,
  songInfo,
  singleArtist,
  getTime,
  dragHandler,
  trackAnimation,
  skipTrackHandler,
  playSongHandler,
  showPlaylist,
  setShowPlaylist,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  mutedSongHandler,
  isMuted
}) {
  return (
    <div style={{ borderRightColor: singleArtist.color }} className='relative h-[90%] delay-75 text-gray-200 bg-black/50 w-full border-r-8 flex items-center'>
      <img className='w-10 h-12 object-cover mr-2' src={singleArtist.cover} alt={singleArtist.artist} />
      <div className='flex sm:gap-2 gap-1 items-center pr-3'>
        <div className='flex sm:p-2'>
          <span className='focus:outline-none' onClick={() => skipTrackHandler('skip-back')}> <Left /> </span>
          <span className='focus:outline-none' onClick={playSongHandler}>{isPlaying ? <Pause /> : <Play />}</span>
          <span className='focus:outline-none' onClick={() => skipTrackHandler('skip-forward')}> <Right /></span>
        </div>
        <div className='mx-1 sm:flex items-center text-gray-200 w-[180px] sm:w-[300px] md:w-[250px] xl:w-[350px] lg:w-[325px]'>
          <div className='flex w-[90%]'>
            <p>{singleArtist.artist} </p>
            <p className='mx-2'> - </p>
          </div>
          <p className='w-full sm:ml-[-8px] inline-flex'>{currentSong.name}</p>
        </div>
        <p className='xl:ml-2 lg:ml-[-7px]'>{getTime(songInfo.currentTime)} </p>

        <div className='lg:block flex items-center md:hidden lg:top-[25%] absolute right-2 h-full gap-1 xl:gap-2'>
          <div className='flex gap-3 items-center'>
            <button onClick={mutedSongHandler}>{isMuted ? <Volume /> : <Muted />} </button>
            <button>
              <input type='checkbox' id='menu' hidden className='peer ' />
              <label
                onClick={() => setShowPlaylist(!showPlaylist)}
                htmlFor='menu'
                className='relative hover:cursor-pointer z-50 peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block text-blue-800'
              >
                <Menu />
              </label>
            </button>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[-4px] left-0 w-full'>
        <div
          style={{ backgroundColor: singleArtist.color }}
          className='track w-full h-1 relative overflow-hidden'
        >
          <label>
            <input
              className='range w-full cursor-pointer bg-transparent appearance-none focus:outline-none'
              htmlFor='bar'
              type='range'
              min='0'
              max={songInfo.duration || 0}
              value={songInfo.currentTime}
              onChange={dragHandler}
            />
          </label>
          <div
            style={trackAnimation}
            className='animate-track bg-black absolute left-0 top-0 w-full h-full pointer-events-none translate-x-[0%]'
          />
        </div>
      </div>
      <Library
        songs={songs}
        singleArtist={singleArtist}
        showPlaylist={showPlaylist}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />
    </div>
  )
}
