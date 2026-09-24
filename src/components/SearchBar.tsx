import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <FaSearch
        size={16}
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="search"
        name="search"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="Search for gadgets..."
        aria-label="Search gadgets"
        autoComplete="off"
        className="h-13 w-full rounded-full border border-[#E5D5D9] bg-white pl-12 pr-12 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 hover:border-[#5B1E2D]/40 focus:border-[#5B1E2D] focus:ring-4 focus:ring-[#5B1E2D]/10 [&::-webkit-search-cancel-button]:appearance-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-[#F8F0F2] hover:text-[#5B1E2D]"
        >
          <FaTimes size={14} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
