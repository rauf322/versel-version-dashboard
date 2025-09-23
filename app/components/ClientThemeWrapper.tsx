import { useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

export const ClientThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme, isLoaded } = useTheme();

  useEffect(() => {
    if (!isLoaded) return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isLoaded]);

  return <>{children}</>;
};