import search from "./assets/fi_search (2).png";
import filter from "./assets/fi_filter.png";

const Search = ({ showChat }) => {
  // const []
  return (
    <div
      className={`flex lg:w-[250px] gap-3 items-center mb-5 ${
        showChat ? "hidden" : "flex"
      }`}
    >
      <div className="flex flex-1 items-center px-[20px] border rounded-lg">
        <img src={search} className="text-zinc-300 mr-[10px] w-5 h-5" alt="" />
        <input
          className="w-full text-base placeholder:text-zinc-300 py-[5px] outline-none border-none"
          placeholder="Search for jobs"
          type="text"
        />
      </div>
      <div className="flex text-zinc-400 text-[20px] px-[12px] py-1 border rounded-lg">
        <img src={filter} className="w-6 h-6" alt="" />
      </div>
    </div>
  );
};

export default Search;
