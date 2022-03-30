import { MenuBar, SearchIcon } from "../UI/Icon"

const Header = () => {
 return(
  <header className="flex justify-between items-center h-28 p-6 px-8 md: bg-theme_white">
  <button
    type="button"
    className="fill-theme_gray hidden md:flex items-center justify-center"
  >
    <MenuBar size={30} />
  </button>
  {/* mobile menu toggle */}
  <button
    type="button"
    className="fill-theme_gray md:hidden flex items-center justify-center"
  >
    <MenuBar size={30} />
  </button>
  {/* mobile menu toggle */}
  <h1 className="flex items-center text-2xl md:text-3xl font-extrabold">
    TASKER
    <span className="relative w-9 h-9 ml-5 before:bg-theme_blue before:w-full before:h-full before:left-0 before:top-0 before:rotate-45 inline-flex before:absolute text-theme_white justify-center items-center">
      <span className="relative text-5xl heading-zero">X</span>
    </span>
  </h1>
  <button
    type="button"
    className="fill-theme_gray flex items-center justify-center"
  >
    <SearchIcon size={30} />
  </button>
</header>
 ) 
}

export default Header