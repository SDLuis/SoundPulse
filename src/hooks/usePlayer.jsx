export default function UsePlayer ({
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
}) {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    })
  }
  const skipArtistHandler = async (direction) => {
    const currentIndex = artists.findIndex((artist) => artist.id === singleArtist.id)
    if (direction === 'skip-forward') {
      await setSingleArtist(artists[(currentIndex + 1) % artists.length])
      await setSongs(singleArtist.audio)
      setIndex((currentIndex + 1) % artists.length)
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % artists.length === -1) {
        await setSingleArtist(artists[artists.length - 1])
        await setSongs(singleArtist.audio)
        setIndex(artists.length - 1)
        activeLibraryHandler(songs[songs.length - 1])
        if (isPlaying) setIsPlaying(!isPlaying)
        return
      }
      await setSingleArtist(artists[(currentIndex - 1) % artists.length])
      await setSongs(singleArtist.audio)
      setIndex((currentIndex - 1) % artists.length)
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    if (isPlaying) setIsPlaying(!isPlaying)
  }

  const skipTrackHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryHandler(songs[songs.length - 1])
        if (isPlaying) audioRef.current.play()
        return
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    if (isPlaying) audioRef.current.play()
  }

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }

  return {
    trackAnimation,
    skipTrackHandler,
    dragHandler,
    getTime,
    playSongHandler,
    skipArtistHandler
  }
}
