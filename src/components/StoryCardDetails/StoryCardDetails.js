import './StoryCardDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTopStories } from '../../utils/apiCalls';
import { formatDate } from '../../utils/utils';
import { Link } from 'react-router-dom';

const StoryCardDetails = () => {
  let { section } = useParams()
  let { id } = useParams()

  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const findArticle = (data) => {
    const result = data.find(story => {
       return story.short_url.includes(id)
    })
    return result;
  }

  const getSingleArticle = async () => {
    try {
      const data = await fetchTopStories(section)
      const singleArticle = await findArticle(data.results)
      setError('')
      setArticle({})
      setArticle(singleArticle)
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    getSingleArticle()
  }, [section, error, id])

  if ((!article && !loading) || (error && !article)) {
    return (
      <>
        <p className='unable'>Unable to load article.</p>
        <Link to='/' className='go-back-link'>
          <p>Back to HOME page</p>
        </Link>
      </>
    );
  } else {
    return (
      <section>
      {!error && loading ? <p>Loading article...</p> : (
        <article className='article-details'>
        <div className='article-info'>
        <p className='article-section'>{article.section.toUpperCase()}</p>
        <p className='byline' style={{display: !article.byline && 'none'}}>{article.byline.toUpperCase()}</p>
        <h1 className='article-title'>{article.title}</h1>
        <p className='published-date'>published: {formatDate(article.published_date)}</p>
        <p className='abstract' style={{fontStyle: 'italic'}}>{article.abstract}</p>
        {article.multimedia && (
          <div className='image-container'>
            <img className='article-image' src={article.multimedia[0].url} alt={`${article.section} + image`}/>
          </div>
        )}
        <p className='article-url' style={{display: article.url === "null" && 'none'}}>View full article <a className='link' href={article.url}>here.</a></p>
        </div>
        </article>
      )}
      </section>
    );
  }
}

export default StoryCardDetails;
