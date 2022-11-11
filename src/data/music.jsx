import Rihanna from '../img/rihanna.jpg'
import Kendrick from '../img/Kendirck Lamar.webp'
import TheWeeknd from '../img/The weeknd.jpg'
import Lana from '../img/Lana del rey.jpg'
import Schoolboyq from '../img/schoolboy q.jpg'
import lana from '../img/lana.webp'
import rihanna from '../img/purple.webp'
import weekend from '../img/weekend.webp'
import kendrick from '../img/c4b930154647947.6346ffbda5d34.webp'
import schoolboy from '../img/black.webp'

const v4 = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return head + tail
}
function Music () {
  return [
    {
      cover: Lana,
      artist: 'Lana Del Rey',
      bg: lana,
      audio: [
        { id: v4(), name: 'Born To Die', song: 'https://naijafinix.com/wp-content/uploads/2022/09/Lana-Del-Rey-Born-To-Die-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Off To The Races', song: 'https://naijafinix.com/wp-content/uploads/2022/09/Lana-Del-Rey-Off-To-The-Races-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Young And Beautiful', song: 'https://naijafinix.com/wp-content/uploads/2022/09/Lana-Del-Rey-Young-And-Beautiful-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Ride', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/02/Lana-Del-Rey-Ride-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Summertime Sadness', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/02/Lana-Del-Rey-Summertime-Sadness-via-Naijafinix.com_.mp3?_=1', active: false }
      ],
      color: '#8c9492',
      id: v4(),
      active: false
    },
    {
      cover: Kendrick,
      artist: 'Kendrick Lamar',
      bg: kendrick,
      audio: [
        { id: v4(), name: 'N95', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/06/Kendrick-Lamar-N95-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'All The Stars Ft SZA', song: 'https://naijafinix.com/wp-content/uploads/2021/05/Kendrick-Lamar-SZA-All-The-Stars-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Black Panther', song: 'https://naijafinix.com/wp-content/uploads/2021/11/Black-Panther-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Humble', song: 'https://naijafinix.com/wp-content/uploads/2021/04/Kendrick-Lamar-Humble-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Bitch, Don’t Kill My Vibe', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2021/05/Kendrick-Lamar-Bitch-Dont-Kill-My-Vibe-via-Naijafinix.com_.mp3?_=1', active: false }
      ],
      color: '#801319',
      id: v4(),
      active: false
    },
    {
      cover: Rihanna,
      artist: 'Rihanna',
      bg: rihanna,
      audio: [
        { id: v4(), name: 'Diamonds', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2020/08/Rihanna-Diamonds-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Good Girl Gone Bad', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2021/08/Rihanna-Good-Girl-Gone-Bad-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'SOS', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2020/08/Rihanna-SOS-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Lift Me Up', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/11/Rihanna-Lift-Me-Up-From-Black-Panther-Wakanda-Forever-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Man Down', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2020/08/Rihanna-Man-Down-via-Naijafinix.com_.mp3?_=1', active: false }
      ],
      color: '#6f4878',
      id: v4(),
      active: false
    },
    {
      cover: TheWeeknd,
      artist: 'The Weeknd',
      bg: weekend,
      audio: [
        { id: v4(), name: 'Blinding Lights', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/10/The-Weeknd-Blinding-Lights-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Starboy Ft. Daft Punk', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/06/The-Weeknd-Starboy-ft.-Daft-Punk-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Die For You', song: 'https://naijafinix.com/wp-content/uploads/2021/04/The-Weeknd-Die-For-You-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Heartless', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2022/10/The-Weeknd-Heartless-via-Naijafinix.com_.mp3?_=1', active: false },
        { id: v4(), name: 'Call Out My Name', song: 'https://www.naijafinix.com.ng/wp-content/uploads/2021/04/The-Weeknd-Call-Out-My-Name-via-Naijafinix.com_.mp3?_=1', active: false }
      ],
      color: '#135389',
      id: v4(),
      active: false
    },
    {
      cover: Schoolboyq,
      artist: 'Schoolboy q',
      bg: schoolboy,
      audio: [
        { id: v4(), name: 'Hell Of A Night', song: 'https://mgamma.123tokyo.xyz/get.php/d/2c/lBm9_pRj2UA.mp3?cid=MTQ4LjAuMjUwLjI0M3xNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA3LjAuMC4wIFNhZmFyaS81MzcuMzYgRWRnLzEwNy4wLjE0MTguMzV8RE8%3D&h=c0uKH6GrBBxIWp1PpFM0NQ&s=1668210009&n=ScHoolboy%20Q%20-%20Hell%20Of%20A%20Night&dom=Iframe', active: false },
        { id: v4(), name: 'Man Of The Year', song: 'https://24naijamusicfiles.com/wp-content/uploads/2020/11/SchoolBoy_Q_-_Man_Of_The_Year.mp3', active: false },
        { id: v4(), name: 'Soccer Dad', song: 'https://www.basenaija.com/wp-content/uploads/2022/04/ScHoolboy_Q_-_Soccer_Dad_@BaseNaija.com.mp3', active: false },
        { id: v4(), name: 'Collard Greens', song: 'https://24naijamusicfiles.com/wp-content/uploads/2020/11/SchoolBoy_Q_Ft_Kendrick_Lamar_-_Collard_Greens.mp3', active: false },
        { id: v4(), name: 'Drunk Ft. 6LACK', song: 'https://talkglitz.media/wp-content/uploads/2019/04/ScHoolboy_Q_-_Drunk_ft_6LACK_Official_Audio__talkglitz.tv.mp3', active: false }
      ],
      color: '#6d6d6d',
      id: v4(),
      active: false
    }
  ]
}

export default Music
