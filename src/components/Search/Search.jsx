import filter from "./assets/Filter.png";
import search from "./assets/fi_search (1).png";

const Search = () => {
  return (
    <div className="flex lg:hidden gap-x-[30px] items-center mb-[25px] mt-[100px]">
      <div className="flex flex-1 items-center px-[20px] py-[10px] border rounded-[8px]">
        {/* <i class="fa-solid fa-magnifying-glass text-zinc-300 text-[15px] mr-[15px]"></i> */}
        <img src={search} alt="" />
        <input
          className="w-full placeholder:text-[14px] placeholder:text-zinc-300 py-[2px] outline-none border-none"
          placeholder="Search for jobs"
          type="text"
        />
      </div>
      <div className="flex text-zinc-400 text-[20px] px-[15px] py-[15px] border rounded-[8px]">
        <img src={filter} alt="" />
      </div>
    </div>
  );
};

export default Search;
