export const fetchTopStories = (section) => {
  const apiKey = '1wyIxNovEbx9RuITWx0ObNyUBuqQuAxP';
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
  )
  .then(res => res.json())
}
