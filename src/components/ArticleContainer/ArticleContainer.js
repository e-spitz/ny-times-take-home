import './ArticleContainer.css'
import StoryCard from '../StoryCard/StoryCard'

const ArticleContainer = ({ section, stories }) => {
  console.log(section, stories)
  const storyCards = stories.map(story => {
    return (
      <StoryCard story={story}/>
    )
  })

  return (
    <section className='article-container'>
    {storyCards}
    </section>
  )
}

export default ArticleContainer;
