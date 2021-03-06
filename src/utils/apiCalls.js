export const fetchTopStories = (section) => {
  const apiKey = '1wyIxNovEbx9RuITWx0ObNyUBuqQuAxP';
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
  )
  .then(res => checkForErrors(res))
}

const checkForErrors = (res) => {
  if (res.status === 404) {
    throw new Error('Something went wrong. Please check back later.')
  } else if (res.status === 500) {
    throw new Error('Server Error. Please check back later.')
  } else if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong. Please check back later.')
  }
}
