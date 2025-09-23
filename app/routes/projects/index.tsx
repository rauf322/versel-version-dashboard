import type { Project } from '@/types/types';
import type { Route } from './+types';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';
import Pagination from '@/components/Pagination';
import ButtonOptions from '@/components/ButtonOptions';

import { AnimatePresence, motion } from 'framer-motion';
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Projects' },
    { name: 'description', content: 'Projects Portfolio' },
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

const Projects = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = [
    'All',
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];
  const PROJECT_PER_PAGE = 6;
  const indexOfLast = page * PROJECT_PER_PAGE;
  const indexOfFirst = indexOfLast - PROJECT_PER_PAGE;

  let filteredProjects =
    selectedCategory == 'All'
      ? projects
      : projects.filter((project) =>
          project.technologies.includes(selectedCategory),
        );

  const totalPages = Math.ceil(filteredProjects.length / PROJECT_PER_PAGE);
  filteredProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  console.log(totalPages);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-black dark:text-white mb-4'>🚀 Projects</h1>
        <p className='text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto'>
          A collection of my recent work and side projects
        </p>
      </div>

      <ButtonOptions
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setPage={setPage}
      />
      <AnimatePresence mode='wait'>
        <motion.div
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.3,
                  },
                },
              }}
              initial='hidden'
              animate='show'
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {totalPages > 1 && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}
    </div>
  );
};

export default Projects;
