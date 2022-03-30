import TodoItem from './TodoItem';

const TodoGroup: React.FC<{ label: string; data: any[] }> = ({
  label,
  data,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-2xl font-extrabold mb-6">{label}</label>
      {data.map((item, index) => (
        <TodoItem key={index} data={item} />
      ))}
    </div>
  );
};
export default TodoGroup;
