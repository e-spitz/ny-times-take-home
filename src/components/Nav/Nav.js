import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health',
  'home', 'magazine', 'movies','opinion', 'politics',
  'realestate', 'science', 'sports', 'technology', 'theater',
  'travel', 'us', 'world']

  const sectionNav = sections.map(section => {
    return (
      <NavLink to={`/${section}`}>
        <button className='nav-btn'>{section}</button>
      </NavLink>
    );
  })

  return (
    <section className='nav-bar'>
      {sectionNav}
    </section>
  );
}

export default Nav;
