import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Header() {

  return (
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
  );
}
