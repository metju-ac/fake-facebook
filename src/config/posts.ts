import type { Post } from '../types'

// Newest post first
export const posts: Post[] = [
  {
    type: 'photo',
    id: 'p1',
    date: '15. dubna 2026',
    text: 'Výlet na Šumavu — nejlepší vzduch v celé republice 🌲',
    image: '/images/posts/sumava.jpg',
    likes: 54,
    comments: 11,
  },
  {
    type: 'checkin',
    id: 'p2',
    date: '12. dubna 2026',
    place: 'Café Lounge, Korunní 45, Praha 2',
    text: 'Páteční káva před týmovým meetingem ☕',
    likes: 18,
    comments: 3,
  },
  {
    type: 'text',
    id: 'p3',
    date: '3. dubna 2026',
    text: 'Kdo hledá byt v Praze 3 — pište. Kamarád uvolňuje krásný 2+kk na Žižkově od května. Nájemné 18 000 Kč / měsíc.',
    likes: 7,
    comments: 14,
  },
  {
    type: 'life-event',
    id: 'p4',
    date: '1. září 2023',
    event: 'Začal nové zaměstnání',
    description: 'Software Engineer ve firmě GoodData, Praha',
    image: '/images/posts/gooddata.jpg',
  },
  {
    type: 'photo',
    id: 'p5',
    date: '20. července 2023',
    text: 'Dovolená v Chorvatsku 🌊 Splitská stará Hora je neskutečná.',
    image: '/images/posts/chorvatsko.jpg',
    likes: 91,
    comments: 22,
  },
]
