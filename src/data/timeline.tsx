export type TimelineItem = {
  id: string;
  titolo: string;
  sottoTitolo?: string;
  descrizione: string;
  periodo: string;
  tipo: 'uni' | 'lavoro';
  eqf?: number;
};

export const timeline: TimelineItem[] = [
  {
    id: 'uni-inizio-magistrale',
    titolo: 'Started Master Degree',
    sottoTitolo: 'Master Degree in Computer Engineering, UniSA',
    descrizione: 'Began advanced studies in computer engineering, focusing on software development, software maintenance, systems architecture, and emerging technologies. Also engaged in research activities and practical projects to deepen understanding of complex computing concepts and DevOps practices.',
    periodo: '24-10-2025 - Present',
    tipo: 'uni',
    eqf: 7
  },
  {
    id: 'uni-laurea',
    titolo: 'Bachelor Degree 110/110 with Honors',
    sottoTitolo: 'Bachelor Degree in Computer Science, UniSA',
    descrizione: 'Graduated with highest honors in Computer Science, acquiring solid foundations in programming, algorithms, data structures, databases, and software engineering principles.',
    periodo: '23-10-2022 - 23-10-2025',
    tipo: 'uni',
    eqf: 6
  },
  {
    id: 'istituto-tecnico',
    titolo: 'High School Diploma 100/100 with Honors',
    sottoTitolo: 'Technical Institute for Computer Science and Telecommunications, Galilei - Di Palo, Salerno',
    descrizione: 'Completed high school education with a focus on computer science and telecommunications, gaining practical skills in programming, network management, and system administration.',
    periodo: '19-09-2016 - 05-05-2021',
    tipo: 'uni',
    eqf: 4
  },
  {
    id: 'work-junior-dev',
    titolo: 'Full Stack Junior Developer - Kebula',
    sottoTitolo: 'Development of applications for company data management',
    descrizione: 'Working on developing and maintaining full stack applications to manage company data efficiently, utilizing modern web technologies and best practices.',
    periodo: '05-11-2025 - Present',
    tipo: 'lavoro',
  }
];
export default timeline;