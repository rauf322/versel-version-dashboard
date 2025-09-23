import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from 'react-router';
import type { Route } from './+types/root';
import './app.css';
import Navbar from './components/Navbar';
import { ThemeProvider } from './contexts/ThemeContext';
import { ClientThemeWrapper } from './components/ClientThemeWrapper';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'My dashboard' },
    { name: 'description', content: 'Overview of my Frontend works' },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark bg-black'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='theme-color'
          content='#000000'
          media='(prefers-color-scheme: dark)'
        />
        <meta
          name='theme-color'
          content='#ffffff'
          media='(prefers-color-scheme: light)'
        />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const isDark = theme === 'dark';
                  const root = document.documentElement;
                  
                  if (isDark) {
                    root.classList.add('dark');
                    root.classList.remove('bg-white');
                    root.classList.add('bg-black');
                  } else {
                    root.classList.remove('dark');
                    root.classList.remove('bg-black');
                    root.classList.add('bg-white');
                  }
                  
                  root.style.backgroundColor = isDark ? '#000000' : '#ffffff';
                  
                  const themeColor = isDark ? '#000000' : '#ffffff';
                  let meta = document.querySelector('meta[name="theme-color"]:not([media])');
                  if (!meta) {
                    meta = document.createElement('meta');
                    meta.name = 'theme-color';
                    document.head.appendChild(meta);
                  }
                  meta.content = themeColor;
                } catch (e) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.backgroundColor = '#000000';
                }
              })();
            `,
          }}
        />
      </head>
      <body className='bg-white dark:bg-black transition-colors duration-200'>
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ClientThemeWrapper>
        <Outlet />
      </ClientThemeWrapper>
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;
  let is404 = false;

  if (isRouteErrorResponse(error)) {
    is404 = error.status === 404;
    message = is404 ? '404' : 'Error';
    details = is404
      ? 'The requested page could not be found.'
      : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ThemeProvider>
      <ClientThemeWrapper>
        <div className='min-h-screen bg-white dark:bg-black flex flex-col'>
          <Navbar />
          <main className='flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full text-center'>
          <div className='mb-8'>
            <h1 className='text-9xl font-bold text-black dark:text-white mb-4'>
              {is404 ? '404' : 'Error'}
            </h1>
            <h2 className='text-2xl font-semibold text-black dark:text-white mb-4'>
              {is404 ? 'Page Not Found' : 'Something went wrong'}
            </h2>
            <p className='text-gray-600 dark:text-gray-400 mb-8 leading-relaxed'>
              {details}
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/'
              className='inline-flex items-center px-6 py-3 bg-black dark:bg-neutral-200 text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-neutral-300 transition-colors duration-200'
            >
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className='inline-flex items-center px-6 py-3 border border-gray-300 dark:border-neutral-700 text-black dark:text-white font-medium rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors duration-200'
            >
              Go Back
            </button>
          </div>

          {stack && import.meta.env.DEV && (
            <details className='mt-8 text-left'>
              <summary className='cursor-pointer text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors'>
                Show Error Details (Development)
              </summary>
              <pre className='mt-4 p-4 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-md overflow-x-auto text-xs text-gray-800 dark:text-gray-200'>
                <code>{stack}</code>
              </pre>
            </details>
          )}
        </div>
      </main>
        </div>
      </ClientThemeWrapper>
    </ThemeProvider>
  );
}
