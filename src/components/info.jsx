import React from 'react'

export default function Info ({ singleArtist }) {
  return (
    <div className='md:ml-[10%] ml-[12%] mt-[20%] md:mt-[10%]'>
      <div className='text-white max-w-xs md:max-w-lg'>
        <p className='font-extrabold uppercase text-5xl md:text-8xl'>{singleArtist.artist}</p>
        <div className='grid mt-4 ml-1 grid-cols-3'>
          <div className='max-w-[6rem] md:max-w-[7rem]'><p className='text-xl font-medium'>{singleArtist.audio[1].name}</p><p className='font-thin'>{singleArtist.audio[1].release}</p></div>
          <div className='max-w-[6rem] md:max-w-[7rem]'><p className='text-xl font-medium'>{singleArtist.audio[2].name}</p><p className='font-thin'>{singleArtist.audio[2].release}</p></div>
          <div className='max-w-[6rem] md:max-w-[7rem]'><p className='text-xl font-medium'>{singleArtist.audio[3].name}</p><p className='font-thin'>{singleArtist.audio[3].release}</p></div>
        </div>
      </div>
    </div>
  )
}
