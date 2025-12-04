export type TimelineItem = {
  id: string;
  titolo: string;
  sottoTitolo?: string;
  periodo: string;
  tipo: 'uni' | 'lavoro';
};

export const timeline: TimelineItem[] = [
  {
    id: 'uni-inizio',
    titolo: 'Inizio Università',
    sottoTitolo: 'Ingegneria Informatica, XYZ',
    periodo: '2019',
    tipo: 'uni',
  },
  {
    id: 'uni-laurea',
    titolo: 'Laurea Triennale',
    periodo: '2022',
    tipo: 'uni',
  },
  {
    id: 'work-junior',
    titolo: 'Junior Developer',
    sottoTitolo: 'Azienda ABC',
    periodo: '2023 - oggi',
    tipo: 'lavoro',
  },
];
export default timeline;