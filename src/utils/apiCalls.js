export const fetchTopStories = async (section) => {
  const apiKey = '1wyIxNovEbx9RuITWx0ObNyUBuqQuAxP';
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
  )
  return await res.json()
}
