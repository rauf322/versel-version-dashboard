import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Get saved theme from localStorage or default to dark
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    setTheme(savedTheme);
    
    // Apply theme immediately to prevent flash
    const root = document.documentElement;
    if (savedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Set initial localStorage value if not exists
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    
    // Mark as loaded after a small delay to ensure DOM is ready
    setTimeout(() => setIsLoaded(true), 10);
  }, []);

  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;
    
    localStorage.setItem('theme', theme);
    
    const root = document.documentElement;
    const isDark = theme === 'dark';
    
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
    let meta = document.querySelector('meta[name="theme-color"]:not([media])') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = themeColor;
  }, [theme, isLoaded]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};