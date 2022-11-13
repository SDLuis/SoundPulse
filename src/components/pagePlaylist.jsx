import Playlist from './playlist'
import Album from './album'

export default function PagePlaylist ({ audios, setSongs, songs, setCurrentSong, audioRef, isPlaying, setSingleArtist }) {
  return (
    <div className='bg-black/70 w-[90vw] md:w-[70vw] grid grid-cols-2 gap-5 rounded-md'>
      <div className='grid grid-cols-1 h-[55vh] overflow-y-auto'>
        {audios.map((artist) => artist.audio.map((audio) => (
          <Playlist
            key={audio.id}
            artist={artist}
            audio={audio}
            song={audio}
            setSongs={setSongs}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={audio.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSingleArtist={setSingleArtist}
          />)))}
      </div>
      <div className=''><Album artists={audios} /></div>
    </div>
  )
}
