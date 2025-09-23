import { Form } from 'react-router';
import type { Route } from './+types';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  const subject = formData.get('subject');
  const errors: Record<string, string> = {};
  if (!name) errors.name = 'Name is required';
  if (!email) {
    errors.email = 'Email is required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email as string)
  ) {
    errors.email = 'Invalid email format';
  }
  if (!subject) errors.subject = 'Subject is required';
  if (!message) errors.message = 'message is required';
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  const data = {
    name,
    email,
    subject,
    message,
  };
  return { message: 'Form submitted successfully', data };
}
const Contacts = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};

  return (
    <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
      <h2 className='text-4xl font-bold text-black dark:text-white mb-8 text-center'>
        ✉️ Contact me
      </h2>
      {actionData?.message ? (
        <p className='mb-6 p-5 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md'>
          {actionData.message}
        </p>
      ) : null}
      <Form method='post' className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-black dark:text-white mb-2'
          >
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md text-black dark:text-white bg-white dark:bg-neutral-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-neutral-700 focus:border-gray-400 dark:focus:border-neutral-600 transition-colors duration-200'
            placeholder='Enter your full name'
          />
        </div>
        {errors.name && (
          <p className='text-red-600 text-sm mt-1'>{errors.name}</p>
        )}

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-black dark:text-white mb-2'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md text-black dark:text-white bg-white dark:bg-neutral-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-neutral-700 focus:border-gray-400 dark:focus:border-neutral-600 transition-colors duration-200'
            placeholder='Enter your email address'
          />
        </div>
        {errors.email && (
          <p className='text-red-600 text-sm mt-1'>{errors.email}</p>
        )}

        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-black dark:text-white mb-2'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md text-black dark:text-white bg-white dark:bg-neutral-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-neutral-700 focus:border-gray-400 dark:focus:border-neutral-600 transition-colors duration-200'
            placeholder='What is this about?'
          />
        </div>
        {errors.subject && (
          <p className='text-red-600 text-sm mt-1'>{errors.subject}</p>
        )}

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-black dark:text-white mb-2'
          >
            Message
          </label>
          <textarea
            name='message'
            id='message'
            rows={6}
            className='w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-md text-black dark:text-white bg-white dark:bg-neutral-900 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-neutral-700 focus:border-gray-400 dark:focus:border-neutral-600 transition-colors duration-200 resize-vertical'
            placeholder='Tell me about your project or question...'
          ></textarea>
        </div>
        {errors.message && (
          <p className='text-red-600 text-sm mt-1'>{errors.message}</p>
        )}
        <button
          type='submit'
          className='w-full bg-black dark:bg-neutral-200 text-white dark:text-black py-3 px-6 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-neutral-700 transition-colors duration-200'
        >
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default Contacts;
