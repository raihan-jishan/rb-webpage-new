import React from 'react';
// import style 
import "../styles/Navbar.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome className='hoverIcon'/>,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoIosPaper className='hoverIcon'/>,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus className='hoverIcon'/>,
    cName: 'nav-text'
  },
  {
    title: 'Pricing',
    path: '/team',
    icon: <IoIcons.IoMdPeople className='hoverIcon'/>,
    cName: 'nav-text'
  },
  {
    title: 'Faqs',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText className='hoverIcon'/>,
    cName: 'nav-text'
  },
  {
    title: 'Update',
    path: '/update',
    icon: <IoIcons.IoMdShuffle className='hoverIcon'/>,
    cName: 'nav-text'
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle className='hoverIcon'/>,
    cName: 'nav-text'
  },
  {
    title: 'Setting',
    path: '/setting',
    icon: <IoIcons.IoMdSettings className='hoverIcon'/>,
    cName: 'nav-text'
  }
];