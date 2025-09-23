import type { Route } from './+types';
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaGlobe,
  FaAward,
  FaHeart,
} from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import experienceData from '@/dataAccess/experience.json';
import skillsData from '@/dataAccess/skills.json';
import educationData from '@/dataAccess/education.json';
import type { Experience, Skills, Education } from './types';

export function loader() {
  return {
    experience: experienceData.experience as Experience[],
    skills: skillsData.skills as Skills,
    education: educationData.education as Education[],
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'About - Rauf Faizov' },
    {
      name: 'description',
      content:
        'Software Engineer with 5+ years of experience in frontend and full-stack development. Learn about my journey, skills, and passion for building exceptional web applications.',
    },
  ];
}

export default function About() {
  const { experience, skills, education } = useLoaderData<typeof loader>();

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-black dark:text-white mb-4'>
          About Me
        </h1>
        <p className='text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed'>
          Software Engineer with 5+ years of experience building scalable web
          applications across fintech, e-commerce, and blockchain domains.
        </p>
      </div>

      {/* Professional Summary */}
      <section className='mb-16'>
        <div className='bg-gray-50 dark:bg-neutral-950 rounded-lg p-8'>
          <div className='flex items-center gap-3 mb-6'>
            <FaBriefcase className='text-2xl text-black dark:text-white' />
            <h2 className='text-2xl font-bold text-black dark:text-white'>
              Professional Summary
            </h2>
          </div>
          <p className='text-gray-700 dark:text-gray-300 leading-relaxed text-lg'>
            Software engineer with proven expertise in architecting robust
            frontend solutions using modern architectural patterns including
            Feature-Sliced Design (FSD), optimizing application performance, and
            implementing comprehensive testing strategies. Strong background in
            React/TypeScript with experience across fintech, e-commerce, and
            blockchain domains. Currently building blockchain-based real estate
            tokenization platforms with Web3 technologies.
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className='mb-16'>
        <div className='flex items-center gap-3 mb-8'>
          <FaCode className='text-2xl text-black dark:text-white' />
          <h2 className='text-2xl font-bold text-black dark:text-white'>
            Technical Skills
          </h2>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-black dark:text-white mb-2'>
                Frontend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-md text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-black dark:text-white mb-2'>
                Backend
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-md text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-black dark:text-white mb-2'>
                DevOps & Tools
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.devops.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-md text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-black dark:text-white mb-2'>
                Productivity
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.productivity.map((skill) => (
                  <span
                    key={skill}
                    className='px-3 py-1 bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-md text-sm'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className='mb-16'>
        <div className='flex items-center gap-3 mb-8'>
          <FaAward className='text-2xl text-black dark:text-white' />
          <h2 className='text-2xl font-bold text-black dark:text-white'>
            Professional Experience
          </h2>
        </div>
        <div className='space-y-8'>
          {experience.map((job, index) => (
            <div
              key={index}
              className='border border-gray-200 dark:border-neutral-800 rounded-lg p-6'
            >
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4'>
                <div>
                  <h3 className='text-xl font-semibold text-black dark:text-white'>
                    {job.title}
                  </h3>
                  <p className='text-lg text-gray-600 dark:text-gray-400 font-medium'>
                    {job.link ? (
                      <a
                        href={job.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline underline-offset-4 decoration-gray-400 dark:decoration-gray-500 hover:decoration-black dark:hover:decoration-white transition-colors'
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                </div>
                <span className='text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0'>
                  {job.duration}
                </span>
              </div>
              <ul className='space-y-2'>
                {job.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-gray-700 dark:text-gray-300'
                  >
                    <span className='text-black dark:text-white mt-1'>•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className='mb-16'>
        <div className='flex items-center gap-3 mb-8'>
          <FaGraduationCap className='text-2xl text-black dark:text-white' />
          <h2 className='text-2xl font-bold text-black dark:text-white'>
            Education
          </h2>
        </div>
        <div className='space-y-4'>
          {education.map((edu, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row sm:justify-between sm:items-center border border-gray-200 dark:border-neutral-800 rounded-lg p-6'
            >
              <div>
                <h3 className='font-semibold text-black dark:text-white'>
                  {edu.degree}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {edu.institution}
                </p>
              </div>
              <span className='text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0'>
                {edu.duration}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Information */}
      <section className='mb-16'>
        <div className='flex items-center gap-3 mb-8'>
          <FaGlobe className='text-2xl text-black dark:text-white' />
          <h2 className='text-2xl font-bold text-black dark:text-white'>
            Additional Information
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='text-center p-6 border border-gray-200 dark:border-neutral-800 rounded-lg'>
            <FaGlobe className='text-3xl text-black dark:text-white mx-auto mb-4' />
            <h3 className='font-semibold text-black dark:text-white mb-2'>
              Languages
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Russian (Native)
            </p>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              English (C1)
            </p>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Polish (B1)
            </p>
          </div>
          <div className='text-center p-6 border border-gray-200 dark:border-neutral-800 rounded-lg'>
            <FaBriefcase className='text-3xl text-black dark:text-white mx-auto mb-4' />
            <h3 className='font-semibold text-black dark:text-white mb-2'>
              Work Authorization
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Legally entitled to work in Poland and EU
            </p>
          </div>
          <div className='text-center p-6 border border-gray-200 dark:border-neutral-800 rounded-lg'>
            <FaHeart className='text-3xl text-black dark:text-white mx-auto mb-4' />
            <h3 className='font-semibold text-black dark:text-white mb-2'>
              Open Source
            </h3>
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              Active contributor to developer tooling and productivity
              automation
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className='text-center bg-gray-50 dark:bg-neutral-950 rounded-lg p-8'>
        <h2 className='text-2xl font-bold text-black dark:text-white mb-4'>
          Based in Warsaw, Poland
        </h2>
        <p className='text-gray-600 dark:text-gray-400'>
          GMT+1 timezone • Available for remote opportunities worldwide
        </p>
      </section>
    </div>
  );
}
