import type { Project } from '@/types/types';
import type { Route } from './+types';
import { GoArrowLeft } from 'react-icons/go';
import { Link } from 'react-router';
import ProjectDesc from '@/components/ProjectDesc';
import fs from 'fs';
import path from 'path';

export async function loader({
  params,
}: Route.LoaderArgs): Promise<{ project: Project }> {
  const id = (params as { id: string }).id;

  // Read the JSON file directly from the repo
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const db = JSON.parse(raw);

  // Find the project by id
  const project = (db.projects as Project[]).find((p) => p.id === id);

  if (!project) {
    throw new Response('Project not found', { status: 404 });
  }

  return { project };
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData as unknown as {
    project: Project;
  };
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <Link
        to='/projects'
        className='inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 mb-8'
      >
        <GoArrowLeft className='text-lg' />
        <span>Back to Projects</span>
      </Link>
      <ProjectDesc project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
