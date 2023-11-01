export type FilmType = {
  id:number;
  filmName: string;
  genre: string[];
  year: number;
  promo: string;
  poster:string;
  filmSrc:string;
};
export const filmsList:FilmType[] = [
  {
    id:1,
    filmName: 'The Grand Budapest Hotel',
    year: 2014,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/bg-the-grand-budapest-hotel.jpg',
    filmSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  }
  ,
  {
    id:2,
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald',
    year: 2018,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    filmSrc: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:3,
    filmName: 'Bohemian Rhapsody',
    year: 2018,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/bohemian-rhapsody.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:4,
    filmName: 'Macbeth',
    year: 2015,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/macbeth.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:5,
    filmName: 'Aviator',
    year: 2004,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/aviator.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:6,
    filmName: 'We need to talk about Kevin',
    year: 2011,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/we-need-to-talk-about-kevin.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:7,
    filmName: 'What We Do in the Shadows',
    year: 2014,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/what-we-do-in-the-shadows.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:8,
    filmName: 'Revenant',
    year: 2015,
    genre: ['Drama','Western'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/revenant.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:9,
    filmName: 'Johnny English',
    year: 2003,
    genre: ['Comedy','Action'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/johnny-english.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id:10,
    filmName: 'Shutter Island',
    year: 2010,
    genre: ['Drama'],
    poster:'img/the-grand-budapest-hotel-poster.jpg',
    promo: 'img/shutter-island.jpg',
    filmSrc:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
];
