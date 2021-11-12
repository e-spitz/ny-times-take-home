import './ArticleContainer.css'
import { useEffect, useState } from 'react';
import { fetchTopStories } from '../../utils/apiCalls';
import { useParams } from 'react-router-dom';
import StoryCard from '../StoryCard/StoryCard';
import { Link } from 'react-router-dom';

const ArticleContainer = () => {
  let { section } = useParams()

  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setStories([])
    setLoading(true)

    const getStories = async () => {
      try {
        const data = await fetchTopStories(section || 'home')
        setError('')
        setStories(data.results)
        setLoading(false)
      } catch (error) {
        setError(error.message)
      }
    }
    getStories()
  }, [section, error])

  const storyCards = stories.map(story => {
    if (story.section && story.title && (story.multimedia !== null) && (story.section !== 'admin')) {
      return (
          <StoryCard key={story.title} story={story} />
      );
    }
    return null
  })

  return (
    <section className='article-container'>
      {loading && !error && <p>Loading...</p>}
      {!loading && error && <p>Error uploading articles.</p>}
      {!loading && !error && section && <h1 className='section-header'>{section}</h1>}
      <div className='line' style={{display: !section && 'none'}}></div>
      {storyCards}
    </section>
  );
}

export default ArticleContainer;
