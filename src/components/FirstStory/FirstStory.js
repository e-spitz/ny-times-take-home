import './FirstStory.css';
import { Link } from 'react-router-dom';

const FirstStory = ({ story }) => {

  const formatID = story.short_url.split('/')
  const id = formatID[formatID.length - 1]

  return (
    <Link to={`/${story.section}/${id}`} className='story-card-link' key={id}>
      <article className='story-card' id={id}>
        <div className='card-img-container'>
          <img className='image' src={story.multimedia[0].url} alt={`${story.title} + image`}/>
        </div>
        <div className='title-abstract'>
          <p className='story-title'>{story.title}</p>
          <p className='story-abstract'>{story.abstract}</p>
        </div>
      </article>
    </Link>
  );
}

export default FirstStory;
