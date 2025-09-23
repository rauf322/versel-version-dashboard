import { Outlet } from 'react-router';
import Navbar from '@/components/Navbar';
import type { Route } from '../about/+types';
import { useTheme } from '@/hooks/useTheme';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My dashboard | Welcome' },
    { name: 'description', content: 'Overview of my Frontend works' },
  ];
}

const HomeLayout = () => {
  const { isLoaded } = useTheme();
  
  // Show a minimal loading state until theme is loaded to prevent flash
  if (!isLoaded) {
    return (
      <div className='min-h-screen bg-white dark:bg-black'>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-black dark:border-white'></div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white dark:bg-black transition-colors duration-200'>
      <Navbar />
      <main className='bg-white dark:bg-black transition-colors duration-200'>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
