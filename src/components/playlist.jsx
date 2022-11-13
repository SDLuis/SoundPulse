import UseLibrary from '../hooks/useLibrary'
export default function Playlist ({
  audio,
  song,
  setSongs,
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  id,
  artist,
  setSingleArtist
}) {
  const { selectSongHandler } = UseLibrary({
    song,
    setSongs,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    id,
    artist,
    setSingleArtist
  })
  return (
    <div
      onClick={selectSongHandler}
      className='library-song flex w-[15rem] md:w-[30vw] items-center mt-1 cursor-pointer'
    >
      <img className='w-10 h-12 object-cover' src={artist.cover} alt='Song Cover' />
      <div className='song-description flex flex-col md:flex-row w-[80vw] md:w-[30vw] pl-4'>
        <h3 className='text-sm w-[50%]'>{artist.artist}</h3>
        <h3 className='text-sm w-[50%]'>{audio.name}</h3>
      </div>
    </div>
  )
}
