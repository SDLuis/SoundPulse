import { useState, useRef, useEffect } from 'react'
import data from '../data/music'

export default function UseSongHandler () {
  const audioRef = useRef(null)
  const [artists, setArtists] = useState(data())
  const [index, setIndex] = useState(0)
  const [singleArtist, setSingleArtist] = useState(artists[0])
  const [songs, setSongs] = useState(artists[index].audio)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  })
  const [libraryStatus, setLibraryStatus] = useState(false)

  useEffect(() => {
    setSongs(artists[index].audio)
    setCurrentSong(artists[index].audio[0])
  }, [index])

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration

    // Calculate Percentage
    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)

    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage: animation
    })
  }

  const activeLibraryHandler = (nextPrev) => {
    const newSong = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    })
    setSongs(newSong)
  }

  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    setTimeout(() => {
      if (isPlaying) audioRef.current.play()
    })
  }

  return { songEndHandler, artists, setArtists, setIndex, songs, setSongs, activeLibraryHandler, singleArtist, timeUpdateHandler, libraryStatus, setSingleArtist, setLibraryStatus, setIsPlaying, currentSong, isPlaying, songInfo, setSongInfo, audioRef, setCurrentSong }
}
