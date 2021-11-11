import './StoryCardDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTopStories } from '../../utils/apiCalls';

const StoryCardDetails = () => {
  let { section } = useParams()
  let { id } = useParams()

  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const setArticleID = (data) => {
    return data.map(story => {
      return { ...story, id: id }
    })
  }

  useEffect(() => {
    let getSingleArticle = async () => {
      try {
        const data = await fetchTopStories(section)
        const cleanedData = setArticleID(data.results)
        const singleArticle = cleanedData.find(article => article.id === id)
        console.log(singleArticle)
        setArticle(singleArticle)
        setLoading(false)
      } catch (err) {
        setError(err.message)
      }
    }
    getSingleArticle()
  }, [section, id, error])

  return (
    <section>
      {error && <p>Error loading article. Please check back later</p>}
      {!error && loading ? <p>Loading article...</p> : (
        <article>
          <h1 className='article-title'>{article.title}</h1>
          <p className='byline'>{article.byline}</p>
          <img className='article-image' src={article.multimedia[0].url}/>
        </article>
      )}
    </section>
  );
}

export default StoryCardDetails;
