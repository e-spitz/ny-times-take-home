import './ArticleContainer.css'
import { useEffect, useState } from 'react';
import { fetchTopStories } from '../../utils/apiCalls';
import { useParams } from 'react-router-dom';
import StoryCard from '../StoryCard/StoryCard';

const ArticleContainer = () => {
  let { section } = useParams()

  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const setArticleID = (data) => {
    return data.map(story => {
      const articleID = story.short_url.split('/')[3]
      return { ...story, id: articleID }
    })
  }

  useEffect(() => {
    setStories([])
    setLoading(true)

    const getStories = async () => {
      try {
        const currentStories = await fetchTopStories(section || 'home')
        setLoading(false)
        setStories(setArticleID(currentStories.results))
      } catch (err) {
        console.log(err)
        setError(err.message)
      }
    }
    getStories()
  }, [section, error])

  const storyCards = stories.map(story => {
    return (
      <StoryCard key={story.id} story={story}/>
    );
  })

  return (
    <section className='article-container'>
      {loading && !error && <p>Loading...</p>}
      {!loading && error && <p>Error uploading articles</p>}
      {storyCards}
    </section>
  );
}

export default ArticleContainer;
