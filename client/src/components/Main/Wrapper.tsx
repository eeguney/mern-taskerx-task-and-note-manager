const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="flex-1 bg-theme_gray3 flex flex-col relative h-screen">{children}</div>
  );
};
export default Wrapper