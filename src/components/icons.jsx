export const Pause = () => {
  return <svg version='1.0' xmlns='http://www.w3.org/2000/svg' className='fill-white focus:outline-none' width='26' height='26' viewBox='0 0 60 60'><path d='M13.2 9.2c-1.7 1.7-1.7 39.9 0 41.6 1.6 1.6 8 1.6 9.6 0 1.7-1.7 1.7-39.9 0-41.6C22.1 8.5 20 8 18 8s-4.1.5-4.8 1.2zm24 0c-1.7 1.7-1.7 39.9 0 41.6 1.6 1.6 8 1.6 9.6 0 1.7-1.7 1.7-39.9 0-41.6C46.1 8.5 44 8 42 8s-4.1.5-4.8 1.2z' /></svg>
}
export const Play = () => {
  return <svg version='1.0' xmlns='http://www.w3.org/2000/svg' className='fill-white focus:outline-none' width='26' height='22' viewBox='0 0 48 48'><path d='M8.6 5.5C6.2 8 6.2 40 8.6 42.5c1 .9 2.5 1.4 3.5 1.2 4-1.1 30-16 31-17.8.6-1.3.6-2.5 0-3.8-1-1.8-27-16.7-31-17.8-1-.2-2.5.3-3.5 1.2z' /></svg>
}
export const Left = () => {
  return <svg aria-hidden='true' className='cursor-pointer focus:outline-none w-[10px] fill-white' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path d='M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z' /></svg>
}
export const Right = () => {
  return <svg aria-hidden='true' className='cursor-pointer focus:outline-none w-[10px] fill-white' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'><path d='M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z' /></svg>
}
export const Volume = () => {
  return <svg version='1.0' xmlns='http://www.w3.org/2000/svg' className='fill-white' width='20' height='20' viewBox='0 0 48 48'><path d='M21.3 11.5c-4.4 3.9-5.7 4.5-9.5 4.5-2.4 0-4.9.5-5.6 1.2-.7.7-1.2 3.8-1.2 7 0 6.5 1.2 7.8 7.5 7.8 3 0 4.7.9 8.8 4.5 7.9 7.2 8.2 6.8 8.2-12.5s-.3-19.7-8.2-12.5zm16.4 1.1c-.3.3.1 2.4.9 4.6 1.8 5.1 1.8 8.5 0 13.6-1 2.9-1.2 4.4-.4 4.8 1.3.8 2.5-1 3.9-6.1 2-7.2-1.3-20-4.4-16.9zM33.4 24c0 7.1.7 8.5 2.6 5.1 1.9-3.7.6-12.1-1.8-12.1-.4 0-.8 3.1-.8 7z' /></svg>
}
export const Muted = () => {
  return <svg version='1.0' xmlns='http://www.w3.org/2000/svg' className='fill-white' width='20' height='20' viewBox='0 0 65 65'><path d='M32.8 15.8 22 23.3v6.4c0 4.9-.3 6.3-1.5 6.3S19 34.7 19 30c0-5.8-.1-6-2.6-6-3.9 0-6.4 1.8-8 5.7C5.5 36.5 10.2 43 17.8 43c2.9 0 2.7.2-4.2 7-5.6 5.4-6.8 7.2-5.9 8.1 1 1 4.8-2.2 17.9-14.7 9.1-8.7 20.7-19.8 25.7-24.6 7.5-7 9-8.8 7.9-9.9-1-1.1-2.3-.3-7 4.4-3.2 3.1-6.1 5.7-6.5 5.7-.4 0-.7-2.2-.7-4.9 0-2.8-.3-5.2-.7-5.4-.5-.3-5.6 2.9-11.5 7.1zm2.4 22.5-8.5 8.4 7.9 5.6c4.3 3.2 8.4 5.7 9.1 5.7 1 0 1.3-3.3 1.3-14 0-7.7-.3-14-.6-14-.4 0-4.5 3.8-9.2 8.3z' /></svg>
}

export const Menu = () => {
  return [
    <svg
      key={1}
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 first'
      viewBox='0 0 24 24'
      stroke='white'
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4 6h16M4 12h8m-8 6h16'
      />
    </svg>,
    <svg
      key={2}
      xmlns='http://www.w3.org/2000/svg'
      className='hidden w-6 h-6 last'
      fill='white'
      viewBox='0 0 24 24'
      stroke='white'
      strokeWidth='2'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  ]
}

export const BigLeft = ({ color }) => {
  return <svg version='1.0' xmlns='http://www.w3.org/2000/svg' className='focus:outline-none' width='100' fill={color} height='133.333' viewBox='0 0 100 100'><path d='M44 33.5 27.5 50 44 66.5c13 13.1 16.7 16.2 17.8 15.3 1.1-.9-1.7-4.2-14-16.5L32.5 50l15.4-15.4C61.3 21.1 64.5 17 61.2 17c-.4 0-8.1 7.4-17.2 16.5z' /></svg>
}
export const BigRight = ({ color }) => {
  return <svg version='1.0' xmlns='http://www.w3.org/2000/svg' className='focus:outline-none' width='100' fill={color} height='133.333' viewBox='0 0 100 100'><path d='M37.4 18.1c-.4.7 5.8 7.6 14.7 16.5L67.5 50 52.2 65.3c-12.3 12.3-15.1 15.6-14 16.5 1.1.9 4.8-2.2 17.8-15.3L72.5 50 56 33.5C46.9 24.4 39.2 17 38.8 17c-.4 0-1 .5-1.4 1.1z' /></svg>
}
