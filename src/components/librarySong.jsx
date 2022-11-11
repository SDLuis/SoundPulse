import UseLibrary from '../hooks/useLibrary'
const LibrarySong = ({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  artist
}) => {
  const { selectSongHandler } = UseLibrary({
    song,
    setSongs,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    id
  })
  return (
    <div
      onClick={selectSongHandler}
      className={`library-song flex items-center mt-1 cursor-pointer ${
        song.active ? 'border-1 bg-black/40' : ''
      }`}
    >
      <img className='w-10 h-12 object-cover' src={artist.cover} alt='Song Cover' />
      <div className='song-description pl-4'>
        <h3 className='text-sm'>{song.name}</h3>
        <h4 className='text-xs'>{artist.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
