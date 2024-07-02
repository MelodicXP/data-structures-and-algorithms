'use strict';

const { sortByMostRecent, sortByTitleIgnoringArticles, removeLeadingArticles } = require('./sortArrayOfObjects');

// Sample array of Movie objects
const Movies = [
  { title: 'Beetlejuice', year: 1988, genres: ['Comedy', 'Fantasy'] },
  { title: 'The Cotton Club', year: 1984, genres: ['Crime', 'Drama', 'Music'] },
  { title: 'The Shawshank Redemption', year: 1994, genres: ['Crime', 'Drama'] },
  { title: 'Crocodile Dundee', year: 1986, genres: ['Adventure', 'Comedy'] },
  { title: 'Valkyrie', year: 2008, genres: ['Drama', 'History', 'Thriller'] },
  { title: 'Ratatouille', year: 2007, genres: ['Animation', 'Comedy', 'Family'] },
  { title: 'City of God', year: 2002, genres: ['Crime', 'Drama'] },
  { title: 'Memento', year: 2000, genres: ['Mystery', 'Thriller'] },
  { title: 'The Intouchables', year: 2011, genres: ['Biography', 'Comedy', 'Drama'] },
  { title: 'Stardust', year: 2007, genres: ['Adventure', 'Family', 'Fantasy'] },
];

describe('Movie sorting functionality', () => {
  test('sortByMostRecent should sort movies by most recent year first', () => {
    const sortedMovies = sortByMostRecent([...Movies]);
    expect(sortedMovies[0].year).toBe(2011); // The Intouchables
    expect(sortedMovies[sortedMovies.length - 1].year).toBe(1984); // The Cotton Club
  });

  test('sortByTitleIgnoringArticles should sort movies alphabetically by title ignoring leading articles', () => {
    const sortedMovies = sortByTitleIgnoringArticles([...Movies]);
    expect(sortedMovies[0].title).toBe('Beetlejuice'); // First alphabetically without "The"
    expect(sortedMovies[sortedMovies.length - 1].title).toBe('Valkyrie'); // Last alphabetically without "The"
  });

  test('removeLeadingArticles should remove leading articles from a title', () => {
    expect(removeLeadingArticles('The Shawshank Redemption')).toBe('Shawshank Redemption');
    expect(removeLeadingArticles('A Beautiful Mind')).toBe('Beautiful Mind');
    expect(removeLeadingArticles('An Inconvenient Truth')).toBe('Inconvenient Truth');
    expect(removeLeadingArticles('City of God')).toBe('City of God'); // No change expected
  });
});
