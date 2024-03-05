import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/login'>LOGIN</Link>
        <Link to='/about'>ABOUT</Link>
      </nav>
    </>
  )
}
