import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const date = Date().split(' ').slice(0,4).join(' ')

  return (
      <section>
        <Link to='/' className='header-link'>
          <div className='title-date'>
            <h1 className='header-title'>top stories reader</h1>
            <p className='today-date'>{date}</p>
          </div>
        </Link>
      </section>
  );
}

export default Header;
