import { EditIcon, IconPlus } from '../UI/Icon';

const TodoItem: React.FC<{ data: { todo: string, list: string } }> = ({ data }) => {
  return (
    <li className="flex flex-col sm:pl-2 md:pl-2 mb-negative-1 sm:before:content-['2hrs']">
      <div className="flex items-center gap-6 sm:pl-16 md:pl-20">
        <div className="listItem flex flex-1 justify-between p-6 border border-theme_gray items-center bg-theme_white hover:bg-theme_gray">
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="rounded-full border-2 border-theme_green w-5 h-5 hover:bg-theme_white"
            ></button>
            <span className="hidden xl:block text-sm pt-0.5 text-theme_gray4 min-w-70px text-center">
              {data.list}
            </span>
            <h3 className="font-semibold text-base">{data.todo}</h3>
          </div>
          <div className="flex gap-5">
            <button type="button">
              <EditIcon size={14} fill="#cccccc" />
            </button>
            <button type="button" className="rotate-45 hidden lg:block">
              <IconPlus size={14} width={10} fill="#cccccc" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
