import {  Navbar} from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
export default function Header(){
    return(
     <Navbar className='border-b-2'>
    <div className='gap-2'>
     <Link to='/home'>     Home </Link>  
     <Link to='/about'>    About</Link>  
     <Link to='/courses'>  Courses</Link>  
     <Link to='/contacts'> Contacts</Link> 
     </div>
     </Navbar>
    
    )
}
