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
    {
      title: 'Junior Developer',
      company: 'Startup XYZ',
      from: 'Červen 2021',
      to: 'Srpen 2023',
    },
  ],
  education: [
    {
      school: 'ČVUT FEL Praha',
      field: 'Softwarové inženýrství',
      from: '2018',
      to: '2023',
    },
    {
      school: 'Gymnázium Plzeň',
      from: '2010',
      to: '2018',
    },
  ],
  placesLived: [
    { city: 'Praha', type: 'current' },
    { city: 'Plzeň', type: 'hometown' },
  ],
  contact: {
    email: 'matej.klima@example.com',
    birthday: '14. února 1999',
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
      date: 'Červen 2023',
      title: 'Promoce na ČVUT FEL',
      image: '/images/posts/promoce.jpg',
    },
    {
      date: 'Září 2018',
      title: 'Nastoupil na ČVUT FEL Praha',
    },
  ],
}
