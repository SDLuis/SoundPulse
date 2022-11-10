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
      stroke='currentColor'
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
