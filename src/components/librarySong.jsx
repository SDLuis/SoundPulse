import UseLibrary from '../hooks/useLibrary'
const LibrarySong = ({
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  artist,
  setSingleArtist
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
        song.active ? 'border-1 bg-black/80' : ''
      }`}
    >
      <img className='object-cover' width='40px' height='48px' src={artist.cover} alt='Song Cover' />
      <div className='song-description pl-4'>
        <p className='text-sm'>{song.name}</p>
        <p className='text-xs'>{artist.artist}</p>
      </div>
    </div>
  )
}

export default LibrarySong
