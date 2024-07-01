import { Navbar, NavbarLink } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
<<<<<<< HEAD
    <Navbar >
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className=' rounded-lg text-black'>
          CASE
        </span>
      </Link>
      <div className='flex justify-between w-full px-2 '>
        
          <div className='flex gap-4 px-2 py-4 '>
            <Link  to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/courses'>Courses</Link>       
          <Link to='/contacts'>Contacts</Link>
        </div>
        <div className='flex justify-end gap-10 text-xs px-2 py-4 '>
          <Link className=" border border-black rounded-lg px-2 py-1" to='/Login'>Login</Link>
          <Link className=" border border-black rounded-lg px-2 py-1" to='/JoinForFree'>Join For Free</Link>
        </div>
      </div>
    </Navbar>
=======
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
>>>>>>> 5cb8c85acd7e27a5ebc4a0493576cffdee1b83d7
  );
}
