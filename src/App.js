import './App.css';
import { useEffect, useState } from 'react'
import { fetchTopStories } from './utils/apiCalls'

const App = () => {
  const [homeStories, setHomeStories] = useState([])

  const setArticleID = (data) => {
    return data.map(story => {
      const articleID = story.short_url.split('/')[3]
      return { ...story, id: articleID }
    })
  }

  const getTopHomeStories = () => {
    fetchTopStories('home')
    .then(data => setHomeStories(setArticleID(data.results)))
  }

  useEffect(() => {
     getTopHomeStories();
   }, []);

  return (
    <div className="App">
      <p>TEST</p>
    </div>
  );
}

export default App;
