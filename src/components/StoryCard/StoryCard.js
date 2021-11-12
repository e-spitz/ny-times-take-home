import './StoryCard.css';
import { Link } from 'react-router-dom'

const StoryCard = ({ story }) => {

  const formatID = story.short_url.split('/')
  const id = formatID[formatID.length - 1]

  return (
    <Link to={`/${story.section}/${id}`} className='story-card-link' key={id}>
      <article className='story-card' id={id}>
        <p className='story-title'>{story.title}</p>
        <p>{story.section}</p>
      </article>
    </Link>
  );
}

export default StoryCard;
