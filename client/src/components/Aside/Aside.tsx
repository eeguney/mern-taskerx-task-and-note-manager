import { useState } from "react"
import { IconPlus } from "../UI/Icon"

const Aside = () => {

  interface ITabs {
    list: boolean,
    note: boolean
  }

  const [tabs, settabs] = useState<ITabs>({ list: true, note: false })

  const tabHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const button: HTMLButtonElement = e.currentTarget
    if(button.name === 'list') settabs({ list: true, note: false })
    else settabs({ list: false, note: true })
  }

  return (
    <aside className="-translate-x-full md:translate-x-0 transition-all ease duration-300 opacity-0 md:opacity-100 w-3/4 bg-theme_white absolute top-0 left-0 sm:w-1/3 md:relative flex xl:w-1/3 lg:w-5/12 h-screen shadow-xl z-10 py-8 px-7 flex-col gap-6">
        <nav className="flex gap-4 lg:gap-7 items-center h-12">
          <button
            type="button"
            className={tabs.list ? 'text-3xl lg:text-5xl text-theme_blue' : 'text-lg lg:text-2xl text-theme_gray2 mt-1 lg:mt-2'}
            name="list"
            onClick={tabHandler}
          >
            My Lists
          </button>
          <button
            type="button"
            name="note"
            className={tabs.note ? 'text-3xl lg:text-5xl text-theme_blue' : 'text-lg lg:text-2xl text-theme_gray2 mt-1 lg:mt-2'}
            onClick={tabHandler}
          >
            Notes
          </button>
        </nav>
        <div className={`${!tabs.list && 'hidden'} grid lg:grid-cols-2 grid-cols-1 gap-6`}>
          <div className="list-box overflow-hidden cursor-pointer h-20 xl:h-40 lg:h-36  relative bg-theme_gray rounded-2xl bg-cover bg-center after:w-full after:h-full after:absolute after:left-0 after:top-0 after:rounded-2xl bg-allTasks flex items-center justify-center">
            <label className="text-2xl text-theme_white relative z-10">
              All Tasks
            </label>
            <span className="text-xs lg:text font-thin text-theme_white absolute z-10 right-4 bottom-2">
              27 tasks
            </span>
          </div>
          <div className="list-box overflow-hidden cursor-pointer h-20 xl:h-40 lg:h-36 relative bg-theme_gray rounded-2xl bg-cover bg-center after:w-full after:h-full after:absolute after:left-0 after:top-0 after:rounded-2xl bg-works flex items-center justify-center">
            <label className="text-2xl text-theme_white relative z-10">
              Works
            </label>
            <span className="text-xs lg:text font-thin text-theme_white absolute z-10 right-4 bottom-2">
              27 tasks
            </span>
          </div>
          <div className="list-box overflow-hidden cursor-pointer h-20 xl:h-40 lg:h-36 relative bg-theme_gray rounded-2xl bg-cover bg-center after:w-full after:h-full after:absolute after:left-0 after:top-0 after:rounded-2xl bg-personal flex items-center justify-center">
            <label className="text-2xl text-theme_white relative z-10">
              Personal
            </label>
            <span className="text-xs lg:text font-thin text-theme_white absolute z-10 right-4 bottom-2">
              27 tasks
            </span>
          </div>
          <div className="list-box overflow-hidden cursor-pointer h-20 xl:h-40 lg:h-36 relative bg-theme_gray rounded-2xl bg-cover bg-center after:w-full after:h-full after:absolute after:left-0 after:top-0 after:rounded-2xl bg-shopping flex items-center justify-center">
            <label className="text-2xl text-theme_white relative z-10">
              Shopping
            </label>
            <span className="text-xs lg:text font-thin text-theme_white absolute z-10 right-4 bottom-2">
              27 tasks
            </span>
          </div>
          <div className="list-box overflow-hidden cursor-pointer h-20 xl:h-40 lg:h-36 relative bg-theme_gray rounded-2xl bg-cover bg-center after:w-full after:h-full after:absolute after:left-0 after:top-0 after:rounded-2xl bg-hobby flex items-center justify-center">
            <label className="text-2xl text-theme_white relative z-10">
              Hobby
            </label>
            <span className="text-xs lg:text font-thin text-theme_white absolute z-10 right-4 bottom-2">
              27 tasks
            </span>
          </div>
          <div className="list-box overflow-hidden no-before cursor-pointer h-20 xl:h-40 lg:h-36 relative border border-theme_gray2 hover:border-2 border-dashed rounded-2xl flex items-center justify-center">
            <IconPlus size={60} />
          </div>
        </div>
        <div className={`${!tabs.note && 'hidden'} grid lg:grid-cols-2 grid-cols-1 gap-6`}>
          
        </div>
      </aside>
  )
}

export default Aside