import './StoryCard.css'

const StoryCard = ({ story }) => {

  return (
    <article className='story-card'>
      <p className='story-title'>{story.title}</p>
      <p>{story.section}</p>
    </article>
  )
}

export default StoryCard
