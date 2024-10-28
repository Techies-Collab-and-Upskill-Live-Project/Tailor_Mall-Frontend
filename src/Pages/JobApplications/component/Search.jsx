import searchIcon from "../../../assets/fi_search.png";


const Search = () => {
  return (
    <div className="flex w-full px-[13.365px] items-center gap-[6.683px] flex-shrink-0 rounded-[83.531px] border-[0.8px] h-10 border-[#d3d3d3] self-stretch">
      <img src={searchIcon} className="w-[16.7px] h-[16.7px]" alt="" />

      <input
        type="text"
        className="text-[11.64px] leading-[120%] dot"
        placeholder="Search for jobs"
      />
    </div>
  );
};

export default Search;
