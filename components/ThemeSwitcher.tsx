'use client'
import { useTheme } from "next-themes"

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button className='btn btn-ghost' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      toggle
    </button>
  )
}

export default ThemeSwitcher