import './Nav.css';
import { Link } from 'react-router-dom';
import { sections } from '../../utils/utils';

const Nav = () => {

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
