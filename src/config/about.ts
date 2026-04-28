import type { About } from '../types'

export const about: About = {
  overview:
    'Backend engineer, fanoušek open-source projektů a horské turistiky. Nejvíc mě baví řešit problémy na rozhraní dat a produktu.',
  workHistory: [
    {
      title: 'Software Engineer',
      company: 'GoodData',
      from: 'Září 2023',
      description: 'Backend vývoj, Kubernetes, datové pipelines.',
    },
  ],
  education: [
    {
      school: 'MUNI FI Brno',
      field: 'Softwarové inženýrství',
      from: '2021',
      to: '2026',
    },
    {
      school: 'Gymnázium, Pardubice, Mozartova 449',
      from: '2017',
      to: '2021',
    },
    {
      school: 'ZŠ Waldorfská, Pardubice',
      from: '2008',
      to: '2017',
    },
  ],
  placesLived: [
    { city: 'Brno', type: 'current' },
    { city: 'Pardubice', type: 'hometown' },
  ],
  contact: {
    email: 'matej.klima5@gmail.com',
    birthday: '26. října 2001',
    languages: ['Čeština', 'Angličtina'],
    websites: ['github.com/metju-ac'],
  },
  lifeEvents: [
    {
      date: 'Září 2023',
      title: 'Nastoupil do GoodData',
      description: 'Nová kapitola v kariéře!',
    },
    {
      date: 'Červen 2024',
      title: 'Bakalářské promoce na MUNI FI',
      image: '/images/promoce.jpg',
    },
    {
      date: 'Září 2021',
      title: 'Nastoupil na MUNI FI',
    },
  ],
}
