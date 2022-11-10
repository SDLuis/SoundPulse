import Rihanna from '../img/rihanna.jpg'
import Kendirck from '../img/Kendirck Lamar.webp'
import TheWeeknd from '../img/The weeknd.jpg'
import Lana from '../img/Lana del rey.jpg'
import Schoolboyq from '../img/schoolboy q.jpg'

const v4 = () => {
  const head = Date.now().toString(36)
  const tail = Math.random().toString(36).substr(2)
  return head + tail
}
function chillHop () {
  return [
    {
      cover: Lana,
      artist: 'Lana Del Rey',
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
      cover: Kendirck,
      artist: 'Kendirck Lamar',
      audio: [
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false }
      ],
      color: '#801319',
      id: v4(),
      active: false
    },
    {
      name: 'Making a Way',
      cover: Rihanna,
      artist: 'Rihanna',
      audio: [
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false }
      ],
      color: '#6f4878',
      id: v4(),
      active: false
    },
    {
      cover: TheWeeknd,
      artist: 'The Weeknd',
      audio: [
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false }
      ],
      color: '#135389',
      id: v4(),
      active: false
    },
    {
      cover: Schoolboyq,
      artist: 'Schoolboy q',
      audio: [
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false },
        { id: v4(), name: '', song: 'https://mp3.chillhop.com/serve.php/?mp3=41956', active: false }
      ],
      color: '#6d6d6d',
      id: v4(),
      active: false
    }
  ]
}

export default chillHop
