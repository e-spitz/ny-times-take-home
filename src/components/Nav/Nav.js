import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health',
  'home', 'magazine', 'movies','opinion', 'politics',
  'realestate', 'science', 'sports', 'technology', 'theater',
  'travel', 'us', 'world']

  const sectionNav = sections.map(section => {
    return (
      <Link to={`/${section}`} key={section.id}>
        <button className='nav-btn'>{section}</button>
      </Link>
    );
  })

  return (
    <section className='nav-bar'>
      {sectionNav}
    </section>
  );
}

export default Nav;
