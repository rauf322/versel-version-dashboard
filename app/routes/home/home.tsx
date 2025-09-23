import type { Project } from '@/types/types';
import type { Route } from './+types/home';
import ProjectDesc from '@/components/ProjectDesc';
import HeroSection from '@/components/HeroSection';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Rauf Faizov | Frontend Developer' },
    {
      name: 'description',
      content:
        'Frontend Developer specializing in React, TypeScript, and modern web technologies. Welcome to my portfolio.',
    },
  ];
}

import fs from 'fs';
import path from 'path';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const filePath = path.join(process.cwd(), 'data', 'db.json'); // adjust to your repo
  const raw = fs.readFileSync(filePath, 'utf8');
  const db = JSON.parse(raw);
  const projects: Project[] = db.projects; // or db itself if structure is array
  return { projects };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  // Get first 2 projects for featured section
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className='min-h-screen bg-white dark:bg-black'>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <section className='bg-gray-50 dark:bg-neutral-950 py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-black dark:text-white mb-4'>
              Featured Projects
            </h2>
            <p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
              A showcase of my recent work and passion projects
            </p>
          </div>

          <div className='space-y-20'>
            {featuredProjects.map((project, index) => (
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12' key={project.id}>
                <ProjectDesc project={project} reverse={index % 2 === 1} />
              </div>
            ))}
          </div>
          {/* View All Projects Link */}
          <div className='text-center mt-16'>
            <Link
              to='/projects'
              className='inline-flex items-center px-6 py-3 bg-black dark:bg-neutral-200 text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-neutral-300 transition-colors duration-200'
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
