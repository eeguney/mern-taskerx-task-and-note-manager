const Filter = () => {
  return (
    <div className="filter fixed w-full md:w-2/3 lg:w-7/12 xl:w-2/3 bottom-0 right-0 flex backdrop-blur-lg bg-theme_transparentWhite h-16 xl:h-20 text-base xl:text-lg">
      <button
        type="button"
        className="flex items-center justify-center flex-1 h-full w-full font-semibold text-theme_red hover:bg-theme_gray"
      >
        All
      </button>
      <button
        type="button"
        className="flex items-center justify-center flex-1 h-full w-full font-semibold border-x border-theme_gray2 hover:bg-theme_gray"
      >
        Active
      </button>
      <button
        type="button"
        className="flex items-center justify-center flex-1 h-full w-full font-semibold hover:bg-theme_gray"
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
