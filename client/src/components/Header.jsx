import { Navbar, NavbarLink } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Navbar >
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='rounded-lg text-black'>
            CASE
          </span>
        </Link>

      

        <Navbar.Collapse>
          <div className='flex flex-col sm:flex-row justify-between w-full'>
            <div className='flex flex-col sm:flex-row sm:gap-4 sm:items-center px-2 py-4 sm:px-0 '>
              <Navbar.Link>
                <Link className="text-black  hover:text-white hover:bg-blue-900 border border-white rounded-lg px-2 py-1 " to='/home'>Home</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link className="text-black hover:text-white hover:bg-blue-900 border border-white rounded-lg px-2 py-1" to='/about'>About</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link className="text-black hover:text-white hover:bg-blue-900 border border-white rounded-lg px-2 py-1" to='/courses'>Courses</Link>
              </Navbar.Link>
              <Navbar.Link>
                <Link className="text-black hover:text-white hover:bg-blue-900 border border-white rounded-lg px-2 py-1" to='/contacts'>Contacts</Link>
              </Navbar.Link>
            </div>
            <div className='flex flex-col sm:flex-row sm:gap-4 sm:items-center justify-end px-2 py-4 sm:px-0'>
              <NavbarLink>
                <Link className="text-black hover:text-white hover:bg-blue-900 border border-white rounded-lg px-2 py-1" to='/Login'>Login</Link>
              </NavbarLink>
              <Navbar.Link>
                <Link className="text-black hover:text-white hover:bg-blue-900 border border-white rounded-lg px-2 py-1" to='/JoinForFree'>Join For Free</Link>
              </Navbar.Link>
            </div>
          </div>
        </Navbar.Collapse>
        <Navbar.Toggle />
      </Navbar>
    </div>
  );
}
