# Theme Switcher Test Instructions

## How to Test the Theme Switcher

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and navigate to the local URL (e.g., http://localhost:5174/)**

3. **Test the theme switcher:**
   - Look for the sun/moon icon in the navbar (both desktop and mobile)
   - Click the theme button
   - You should see:
     - ✅ HTML element gets `dark` class added/removed
     - ✅ Background colors change immediately
     - ✅ Text colors change immediately
     - ✅ All components respond to theme change
     - ✅ Theme preference is saved in localStorage

4. **Test persistence:**
   - Switch to dark/light mode
   - Refresh the page
   - The theme should remain the same

5. **Test across pages:**
   - Navigate to different pages (Home, Projects, About, Contact)
   - The theme should be consistent across all pages
   - The theme switcher should work on every page

## If the theme switcher is not working:

1. **Check browser console for errors**
2. **Verify localStorage:**
   - Open browser DevTools → Application → Local Storage
   - Look for `theme` key with value `dark` or `light`
3. **Check HTML element:**
   - In DevTools Elements tab, check if `<html>` has `class="dark"` when in dark mode
4. **Verify CSS is loaded:**
   - In DevTools Network tab, ensure CSS files are loading
   - Check if Tailwind classes like `.dark\:bg-black` exist in the CSS

## Expected Behavior:

- **Default**: Dark theme by default
- **Dynamic**: Instant color changes when clicking theme button
- **Persistent**: Theme choice saved and restored on page reload
- **Universal**: Works across all pages and components
- **Responsive**: Theme switcher available on both desktop and mobile

## Technical Details:

- **Tailwind Configuration**: Using v4 with `@variant dark (html.dark &);`
- **Theme Context**: React Context manages theme state
- **Class Application**: `html.dark` class toggles all dark mode styles
- **Persistence**: localStorage saves user's theme preference
- **SSR Safe**: Prevents flash of unstyled content on page load