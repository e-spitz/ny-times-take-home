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
    getSingleArticle();
  }, [section, id, error])

  return (
    <div>
    <p>{article.title}</p>
    </div>
  );
}

export default StoryCardDetails;
