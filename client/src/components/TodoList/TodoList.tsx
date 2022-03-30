import { IconPlus, ImageIcon, PlusIcon, SmileIcon } from "../UI/Icon";
import TodoGroup from "./TodoGroup";

const GroupList = [
  {
    label: "Today",
    data: [
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
    ],
    status: true,
  },
  {
    label: "Tomorrow",
    data: [
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
    ],
    status: true,
  },
  {
    label: "Upcome",
    data: [
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
      {
        list: "Hobby",
        todo: "Take the jacket to dry cleaning",
      },
    ],
    status: true,
  },
];

const TodoList: React.FC = () => {
  return (
    <main className="overflow-y-scroll flex-1">
      <section className="list flex flex-col gap-8 p-6 md:pb-32 lg:pt-10 lg: lg:px-10 pb-28">
        <section className="">
          <div className="flex gap-4 items-center">
            <div className="rounded-3xl flex gap-4 flex-1 shadow-lg bg-theme_white pr-2">
              <div className="flex flex-col justify-center px-4 border-r border-theme_gray3 rounded-tl-3xl rounded-bl-3xl">
                <button type="button" className="px-4">Choose a list</button>
                <div className="hidden">
                  <button type="button" value="list-1">List 1</button>
                  <button type="button" value="list-2">List 2</button>
                  <button type="button" value="list-2">List 3</button>
                </div>
              </div>
              <input type="text" className="flex-1 px-2 h-20" placeholder="Add new task now!" />
              <button
              type="button"
              className="flex items-center justify-center shadow-lg rounded-full bg-theme_blue w-14 h-14 self-center"
            >
              <PlusIcon size={25} fill="#ffffff" />
            </button>
            </div>
            
          </div>
          <div className="flex pt-4 px-4 pr-0">
            <div className="flex flex-1 gap-6">
              <button type="button" className="flex gap-2 text-sm text-theme_red fill-theme_red">
                <SmileIcon size={18} /> Emoji
              </button>
              <button type="button" className="flex gap-2 text-sm text-theme_blue fill-theme_blue">
                <ImageIcon size={18} /> Image
              </button>
            </div>
            <button
              type="button"
              className="float-right text-sm text-theme_green"
            >
              Switch to task editor
            </button>
          </div>
        </section>
        {GroupList.filter((group) => group.status).map((group, index) => (
          <TodoGroup key={index} label={group.label} data={group.data} />
        ))}
      </section>
    </main>
  );
};

export default TodoList;
