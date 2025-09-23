import type { Project } from '@/types/types';

const ProjectDesc = ({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
      {/* Image Column */}
      <div
        className={`aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 ${reverse ? 'lg:order-2' : ''}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content Column */}
      <div className={`space-y-6 ${reverse ? 'lg:order-1' : ''}`}>
        <div>
          <h1 className='text-4xl font-bold text-black dark:text-white mb-4'>
            {project.title}
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-lg leading-relaxed'>
            {project.longDescription}
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h2 className='text-xl font-semibold text-black dark:text-white mb-3'>
            Technologies
          </h2>
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className='px-3 py-1 text-sm bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-md'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className='flex gap-4 pt-4'>
          <a
            href={project.gitRepo}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-4 py-2 bg-black dark:bg-neutral-200 text-white dark:text-black text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-neutral-300 transition-colors duration-200'
          >
            View on GitHub
          </a>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center px-4 py-2 border border-gray-300 dark:border-neutral-700 text-black dark:text-white text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors duration-200'
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;
