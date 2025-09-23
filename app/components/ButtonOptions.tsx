import type { ButtonOptionsProps } from '@/types/types';

const ButtonOptions = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setPage,
}: ButtonOptionsProps) => {
  return (
    <div className='flex flex-wrap justify-center gap-2 mb-8'>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => {
            setSelectedCategory(category);
            setPage(1); // Reset to first page when filtering
          }}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-black dark:bg-neutral-200 text-white dark:text-black border border-black dark:border-neutral-200'
              : 'bg-white hover:bg-black hover:text-white dark:bg-neutral-900 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-neutral-700 dark:hover:bg-neutral-200 dark:hover:text-black hover:border-gray-400 dark:hover:border-neutral-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ButtonOptions;
