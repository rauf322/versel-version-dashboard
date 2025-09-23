import { useTheme } from '@/hooks/useTheme';
import { Switch, SwitchIndicator, SwitchWrapper } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';

export const AnimatedThemeToggle = () => {
  const { theme, toggleTheme, isLoaded } = useTheme();

  if (!isLoaded) {
    return (
      <div className='w-16 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full p-1'>
        <div className='w-6 h-6 bg-white dark:bg-neutral-600 rounded-full' />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <SwitchWrapper permanent={true}>
      <Switch size='xl' checked={isDark} onCheckedChange={toggleTheme} />
      <SwitchIndicator state='on'>
        <Sun className='size-4 text-white' />
      </SwitchIndicator>
      <SwitchIndicator state='off'>
        <Moon className='size-4 text-gray-400' />
      </SwitchIndicator>
    </SwitchWrapper>
  );
};
