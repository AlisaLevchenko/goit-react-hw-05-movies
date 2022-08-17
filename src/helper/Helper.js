export const normalizedYearOfMovie = date => date && date.split('-')[0];

export const normolizedGenres = genres =>
  genres && genres.map(el => el.name).join(', ');
