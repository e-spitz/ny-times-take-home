import './Header.css'
import { Link } from 'react-router'

const Header = () => {
  const date = Date().split(' ').slice(0,4).join(' ')
  console.log(date)
  return (
    <section>
    <div className='title-date'>
      <h1 className='header-title'>the top stories reader</h1>
      <p className='today-date'>{date}</p>
    </div>
    </section>
  )
}

export default Header;
