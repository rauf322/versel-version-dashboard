import { NavLink } from 'react-router';
import { FaDiceD20 } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { AnimatedThemeToggle } from './AnimatedThemeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const base = 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200';
  const active = 'text-black dark:text-white font-medium';

  return (
    <nav className='bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-xl font-semibold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200'
        >
          <FaDiceD20 className='text-black dark:text-white text-lg' />
          <span>Bitrift</span>
        </NavLink>

        <div className='hidden md:flex space-x-8 items-center'>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to='/projects'
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to='/contact'
          >
            Contact
          </NavLink>
          <AnimatedThemeToggle />
        </div>

        <div className='md:hidden flex items-center gap-4'>
          <AnimatedThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-neutral-800'
            title='Menu'
          >
            {menuOpen ? (
              <RxCross2 className='text-black dark:text-white text-xl' />
            ) : (
              <GiHamburgerMenu className='text-black dark:text-white text-xl' />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 py-2 space-y-1 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800'>
          <NavLink
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                isActive
                  ? 'text-black dark:text-white font-medium bg-gray-50 dark:bg-neutral-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`
            }
            to='/'
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                isActive
                  ? 'text-black dark:text-white font-medium bg-gray-50 dark:bg-neutral-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`
            }
            to='/projects'
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                isActive
                  ? 'text-black dark:text-white font-medium bg-gray-50 dark:bg-neutral-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`
            }
            to='/about'
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-base transition-colors duration-200 ${
                isActive
                  ? 'text-black dark:text-white font-medium bg-gray-50 dark:bg-neutral-900'
                  : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`
            }
            to='/contact'
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
