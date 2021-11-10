import './StoryCard.css';
import { Link } from 'react-router-dom';

const StoryCard = ({ story }) => {

  return (
      <Link to={`/${story.section}/${story.id}`} className='story-card-link'>
        <article className='story-card'>
          <p className='story-title'>{story.title}</p>
          <p>{story.section}</p>
        </article>
      </Link>
  );
}

export default StoryCard
