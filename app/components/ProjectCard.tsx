import { Link } from 'react-router';
import type { Project } from '@/types/types';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className='bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col h-full'>
      <Link to={`/projects/${project.id}`} className='block flex-1'>
        <div className='aspect-video overflow-hidden'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-200'
          />
        </div>

        <div className='p-6 flex flex-col flex-1'>
          <h3 className='text-xl font-semibold text-black dark:text-white mb-2'>
            {project.title}
          </h3>
          <p className='text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-4'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='px-2 py-1 text-xs bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-md'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>

      <div className='px-6 pb-6 flex gap-3 mt-auto'>
        <a
          href={project.gitRepo}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200'
          onClick={(e) => e.stopPropagation()}
        >
          GitHub →
        </a>
        {project.link && (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200'
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
