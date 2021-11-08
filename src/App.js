import './App.css';
import { useEffect, useState } from 'react'
import { fetchTopStories } from './utils/apiCalls'

const App = () => {
  const [homeStories, setHomeStories] = useState([])

  const getTopHomeStories = () => {
    fetchTopStories('home')
    .then(data => setHomeStories(data.results))
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
