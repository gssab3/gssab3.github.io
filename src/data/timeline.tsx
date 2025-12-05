export type TimelineItem = {
  id: string;
  titolo: string;
  sottoTitolo?: string;
  periodo: string;
  tipo: 'uni' | 'lavoro';
};

export const timeline: TimelineItem[] = [
  {
    id: 'uni-inizio-magistrale',
    titolo: 'Started Master Degree',
    sottoTitolo: 'Corso di Laurea Magistrale in Ingegneria Informatica, UniSA',
    periodo: '24-10-2025',
    tipo: 'uni',
  },
  {
    id: 'uni-laurea',
    titolo: 'Bachelor Degree Achieved - 110/110 with Honors',
    sottoTitolo: 'Corso di Laurea Triennale di Informatica, UniSA',
    periodo: '23-10-2025',
    tipo: 'uni',
  },
  {
    id: 'uni-inizio',
    titolo: 'Started University',
    sottoTitolo: 'Corso di Laurea Triennale di Informatica, UniSA',
    periodo: '20-09-2022',
    tipo: 'uni',
  },
  {
    id: 'work-junior-dev',
    titolo: 'Full Stack Junior Developer - Kebula',
    sottoTitolo: 'Sviluppo di applicazioni web e mobile per la gestione dei dati aziendali',
    periodo: '05-11-2025 - Present',
    tipo: 'lavoro',
  }
];
export default timeline;