import './StoryCard.css';
import { Link } from 'react-router-dom'

const StoryCard = ({ story }) => {

  const formatID = story.short_url.split('/')
  const id = formatID[formatID.length - 1]

  return (
    <Link to={`/${story.section}/${id}`} className='story-card-link' key={id}>
      <article className='story-card-stories' id={id}>
        <div className='title-abstract-stories'>
          <p className='story-title-stories'>{story.title}</p>
          <p className='story-abstract-stories'>{story.abstract}</p>
        </div>
      </article>
    </Link>
  );
}

export default StoryCard;
