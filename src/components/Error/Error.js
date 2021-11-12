import './Error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <p className='unable'>Unable to load article.</p>
      <Link to='/' className='go-back-link'>
        <p>Back to HOME page</p>
      </Link>
    </div>
  )
}

export default Error;
