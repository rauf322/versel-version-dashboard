import { Link } from 'react-router';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      <div className='text-center'>
        <div className='mb-8'>
          <h1 className='text-5xl sm:text-6xl font-bold text-black dark:text-white mb-6'>
            Hi, I'm <span className='text-black dark:text-white'>Rauf</span> 👋
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'>
            Frontend Developer passionate about building beautiful, functional
            web applications. I specialize in React, TypeScript, and modern
            development tools to create exceptional user experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-6 mb-12'>
          <a
            href='https://github.com/rauf322'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-full transition-all duration-200'
            title='GitHub'
          >
            <FaGithub className='text-2xl' />
          </a>
          <a
            href='https://linkedin.com/in/rauf-faizov'
            target='_blank'
            rel='noopener noreferrer'
            className='p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-full transition-all duration-200'
            title='LinkedIn'
          >
            <FaLinkedin className='text-2xl' />
          </a>
          <a
            href='mailto:rauf.faizov.200271@gmail.com'
            className='p-3 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-full transition-all duration-200'
            title='Email'
          >
            <FaEnvelope className='text-2xl' />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to='/projects'
            className='inline-flex items-center px-6 py-3 bg-black dark:bg-neutral-200 text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-neutral-300 transition-colors duration-200'
          >
            View My Work
          </Link>
          <Link
            to='/contact'
            className='inline-flex items-center px-6 py-3 border border-gray-300 dark:border-neutral-700 text-black dark:text-white font-medium rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors duration-200'
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

