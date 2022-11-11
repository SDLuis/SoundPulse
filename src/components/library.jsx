import LibrarySong from './librarySong'

const Library = ({
  songs,
  showPlaylist,
  singleArtist,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying
}) => {
  return (
    <div className={`absolute w-full right-0 transition-all ease-in-out duration-75 bg-black/70 h-[585%] overflow-y-auto opacity-0 pointer-events-none scrollbar-hide bottom-[-540%] ${showPlaylist ? 'opacity-100 bottom-[-592%] pointer-events-auto' : ''}`}>
      <div className='library-songs flex flex-col gap-1'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            artist={singleArtist}
            setSongs={setSongs}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
