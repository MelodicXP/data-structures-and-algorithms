'use strict';

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

// Function to sort movies by most recent year first (Descending Order)
let sortByMostRecent = (movies) => {
  return movies.sort((a, b) => {
    if (a.year < b.year) return 1; // `a` should come after `b` if `a.year` is less than `b.year`
    if (a.year > b.year) return -1; // `a` should come before `b` if `a.year` is greater than `b.year`
    return 0; // `a` and `b` are equal
  });
};

// Function sort movies alphabetically, ignoring leading articles
let sortByTitleIgnoringArticles = (movies) => {
  return movies.sort((a, b) => {
    const titleA = removeLeadingArticles(a.title).toLowerCase();
    const titleB = removeLeadingArticles(b.title).toLowerCase();
    if (titleA < titleB) return -1; // `a` should come before `b` if `titleA` is less than `titleB`
    if (titleA > titleB) return 1; // `a` should after before `b` if `titleA` is greater than `titleB`
    return 0; // `a` and `b` are equal
  });
};

// Function remove leading articles from a title
let removeLeadingArticles = (title) => {
  return title.replace(/^(A|An|The)\s+/i, '');
};

// Sort movies by most recent year
let sortedMoviesByMostRecentYear = sortByMostRecent(Movies);
console.log('Movies sorted by recent year: ');
console.log(sortedMoviesByMostRecentYear);

// Sort movies alphabetically ignoring leading articles
let sortedMoviesByTitle = sortByTitleIgnoringArticles(Movies);
console.log('Movies sorted by title (ignoring leading articles): ');
console.log(sortedMoviesByTitle);

module.exports = {
  sortByMostRecent,
  sortByTitleIgnoringArticles,
  removeLeadingArticles
};


