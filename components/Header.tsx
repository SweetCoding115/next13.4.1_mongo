import ThemeSwitcher from "./ThemeSwitcher"

const Header = ({ children }) => {
  return (
    <div className="flex justify-between w-full p-2 max-h-96 shadow-md items-center border-b-1 dark:shadow-slate-500">
      <h2 className="text-3xl m-2">{children}</h2>
      <ThemeSwitcher />
    </div>
  )
}
export default Header
