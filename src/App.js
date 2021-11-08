import './App.css';
import { useEffect, useState } from 'react'
import { fetchTopStories } from './utils/apiCalls'

const App = () => {
  const [homeStories, setHomeStories] = useState([])
  const [section, setSection] = useState('home')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setArticleID = (data) => {
    return data.map(story => {
      const articleID = story.short_url.split('/')[3]
      return { ...story, id: articleID }
    })
  }

  const getTopHomeStories = () => {
    fetchTopStories(section)
    .then(data => setHomeStories(setArticleID(data.results)))
    .catch(err => setError(err))
  }

  useEffect(() => {
    setLoading(true)
    getTopHomeStories();
   }, []);

  useEffect(() => {
    setLoading(false)
  }, [homeStories])

  return (
    <div className="App">
      <p>TEST</p>
    </div>
  );
}

export default App;
