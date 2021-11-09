import './App.css';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchTopStories } from '../../utils/apiCalls'
import Header from '../Header/Header'
import ArticleContainer from '../ArticleContainer/ArticleContainer'

const App = () => {
  const [stories, setStories] = useState([])
  const [section, setSection] = useState('home')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setArticleID = (data) => {
    return data.map(story => {
      const articleID = story.short_url.split('/')[3]
      return { ...story, id: articleID }
    })
  }

  const getStories = () => {
    setError('')
    fetchTopStories(section)
    .then(data => setStories(setArticleID(data.results)))
    .catch(err => setError(err.message))
  }

  useEffect(() => {
    setLoading(true)
    getStories();
  }, []);

  useEffect(() => {
    setLoading(false)
  }, [stories])

  return (
    <div className="App">
      <Header />
      <ArticleContainer section={section} stories={stories}/>
    </div>
  );
}

export default App;
