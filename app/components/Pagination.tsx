import type { PaginationProps } from '@/types/types';

const Pagination: React.FC<PaginationProps> = ({
  setPage,
  totalPages,
  page,
}) => {
  return (
    <div className='flex justify-center gap-2 mt-12'>
      {/* Previous Button */}
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className='px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-300 dark:border-neutral-700 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-600 dark:disabled:hover:text-gray-400 disabled:hover:bg-white dark:disabled:hover:bg-transparent transition-colors duration-200'
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
            page === index + 1
              ? 'bg-black dark:bg-neutral-200 text-white dark:text-black'
              : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-300 dark:border-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-900'
          }`}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className='px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white border border-gray-300 dark:border-neutral-700 rounded-md hover:bg-gray-50 dark:hover:bg-neutral-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:text-gray-600 dark:disabled:hover:text-gray-400 disabled:hover:bg-white dark:disabled:hover:bg-transparent transition-colors duration-200'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
