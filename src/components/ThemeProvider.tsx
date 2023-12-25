"use client"
import { useTheme } from 'next-themes'
export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Switch Theme
    </button>
  )
}