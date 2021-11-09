import './StoryCard.css'

const StoryCard = ({ story }) => {
  console.log(story)
  return (
    <div>
      <p>{story.title}</p>
    </div>
  )
}

export default StoryCard
