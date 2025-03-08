type conference = {
  title: string;
  location: string;
  date: string;
  startDate: Date;
  endDate: Date;
  url: string;
};

const conferences: conference[] = [
  {
    title: 'WIO Annual Conference',
    location: 'Orlando, FL',
    date: 'January 17 - 18',
    startDate: new Date('2025-01-17'),
    endDate: new Date('2025-01-18'),
    url: 'https://www.wioconference.com/',
  },
  {
    title: 'AAO Winter Conference',
    location: 'Marco Island, FL',
    date: 'January 24 - 26',
    startDate: new Date('2025-01-24'),
    endDate: new Date('2025-01-26'),
    url: 'https://www2.aaoinfo.org/winter-conference/',
  },
  {
    title: 'Envista Summit',
    location: 'Las Vegas, NV',
    date: 'May 30 - June 1',
    startDate: new Date('2025-05-30'),
    endDate: new Date('2025-06-01'),
    url: 'https://www.nobelbiocare.com/en-dk/envista-summit',
  },
  {
    title: 'AAO Annual Session',
    location: 'Philadelphia, PA',
    date: 'April 25 - 27',
    startDate: new Date('2025-04-25'),
    endDate: new Date('2025-04-27'),
    url: 'https://annualsession.aaoinfo.org/',
  },
  {
    title: 'GORP Annual Session',
    location: 'Lexington, KY',
    date: 'July 31 - August 3',
    startDate: new Date('2025-07-31'),
    endDate: new Date('2025-08-03'),
    url: 'https://www.gorportho.com/',
  },
  {
    title: 'OP Summit',
    location: 'Las Vegas, NV',
    date: 'September 18 - 20',
    startDate: new Date('2025-09-18'),
    endDate: new Date('2025-09-20'),
    url: 'https://opsummit2025.com/',
  },
  {
    title: 'SAO/SWSO Annual Session',
    location: 'San Antonio, TX',
    date: 'November 6 - 8',
    startDate: new Date('2025-11-06'),
    endDate: new Date('2025-11-08'),
    url: 'https://www.swso.org/',
  },
  {
    title: 'MOPC Annual Session',
    location: 'Cape Canaveral, FL',
    date: 'October 10 - 11',
    startDate: new Date('2025-10-10'),
    endDate: new Date('2025-10-11'),
    url: 'https://orthodonticpearls.org/mopc-2025/',
  },
  {
    title: 'PCSO/WOCON Annual Session',
    location: 'Honolulu, HI',
    date: 'October 16 - 18',
    startDate: new Date('2025-10-16'),
    endDate: new Date('2025-10-18'),
    url: 'https://www.pcsortho.org/annual-session/2025-wocon-session-details/',
  },
];

export const getUpcomingConference = (): conference | null => {
  const now = new Date();
  const upcomingConferences = conferences.filter((conf) => conf.endDate >= now);

  if (!upcomingConferences.length) {
    return null;
  }

  upcomingConferences.sort(
    (a, b) => a.startDate.getTime() - b.startDate.getTime(),
  );

  return upcomingConferences[0];
};
