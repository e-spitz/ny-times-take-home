export const fetchTopStories = async (section) => {
  const apiKey = '1wyIxNovEbx9RuITWx0ObNyUBuqQuAxP';
  const res = await fetch(
    `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
  )
  const data = await checkForErrors(res);
  return data;
}

const checkForErrors = (res) => {
  if (res.status === 404) {
    throw new Error('Oops, something went wrong. Please check back later.')
  } else if (res.status === 500) {
    throw new Error('Server Error. Please check back later.')
  } else if (res.ok) {
    return res.json()
  } else {
    throw new Error('Oops, something went wrong. Please check back later.')
  }
}
