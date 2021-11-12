export const formatDate = (date) => {
    const splitDate = date.split('T')
    const newDate = splitDate[0].split('-').reverse().join('-')
    return newDate
  }

  export const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health',
  'insider', 'magazine', 'movies','opinion', 'politics',
  'realestate', 'science', 'sports', 'technology', 'theater',
  'travel', 'us', 'world']
