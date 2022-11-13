export default function Album ({ artists }) {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 h-[55vh] overflow-y-auto'>
      {artists.map((artist) => (
        <div className='pt-2' key={artist.id}>  <img className='md:w-32 md:h-32 w-16 h-16 rounded-md object-cover' src={artist.cover} />
          <p className='text-white md:text-xl font-medium'> {artist.artist}</p>
        </div>
      ))}
    </div>
  )
}
