import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'; 
import './header.styles.scss';


const Header = ({currentUser}) => (
    <div className= 'header'>
    <Link className='title' to='/'>
     Budget-Controller    
    </Link>
    <div className='options'>
    {
      currentUser ? (
       <div className='option' onClick={() => auth.signOut()}> Logout </div>
       ) : (
       <Link className='option' to='/login'> Login </Link>
       )}
    <Link className='option' to='/sign-up'>
    Sign_Up
    </Link>
    <Link className='option' to='/user-page'>
    User
    </Link>
    
      </div> 
   </div>

);

export default Header;