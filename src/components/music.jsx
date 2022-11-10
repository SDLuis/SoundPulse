import { Pause, Play, Left, Right, Volume, Menu } from './icons'
import UsePlayer from '../hooks/usePlayer'

export default function Music ({
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  audioRef,
  setCurrentSong,
  songs,
  activeLibraryHandler,
  artist
}) {
  const {
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
    activeLibraryHandler,
    setIsPlaying,
    currentSong,
    songInfo,
    isPlaying
  })

  return (
    <div className='relative h-[90%] text-gray-200 bg-black w-full border-r-8 border-r-orange-500 flex items-center'>
      <img className='w-10 h-12 object-cover mr-2' src={artist.cover} />
      <div className='flex sm:gap-2 gap-1 items-center pr-3'>
        <div className='flex sm:p-2'>
          <button onClick={() => skipTrackHandler('skip-back')}> <Left /> </button>
          <button onClick={playSongHandler}>{isPlaying ? <Pause /> : <Play />}</button>
          <button onClick={() => skipTrackHandler('skip-forward')}> <Right /></button>
        </div>
        <div className='mx-1 sm:flex items-center text-gray-200 w-[150px] sm:w-[300px]'>
          <p className='w-[90%]'>{artist.artist} - </p>
          <p className='w-full sm:ml-[-30px] md:ml-[-3rem] inline-flex truncate md:text-clip'>{currentSong.name}</p>
        </div>
        <p className='sm:ml-[-35px] lg:ml-5'>{getTime(songInfo.currentTime)} </p>

        <div className='flex items-center absolute right-2 h-full gap-1 xl:gap-2'>
          <button> <Volume /> </button>
          <button> <Menu /> </button>
        </div>
      </div>
      <div className='absolute bottom-[-4px] left-0 w-full'>
        <div
          style={{ backgroundColor: artist.color }}
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
            className='animate-track bg-black absolute left-0 top-0 w-full h-[500%] pointer-events-none translate-x-[0%]'
          />
        </div>
      </div>
    </div>
  )
}
