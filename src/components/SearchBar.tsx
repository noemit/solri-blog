import { useState } from "react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-[#8b6f47] transition focus:outline-none focus:ring-2 focus:ring-[#8b6f47] rounded"
        aria-label="Search posts"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.916 4.185c-.33.674-.68 1.3-1.37 1.354A1 1 0 0112 14.57a3.992 3.993 0 005.658 2.56 1 1 0 011.247.814c.022.722-.28 1.42-.787 1.92a7 7 0 11-5.907-12.396z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50" role="search">
          <input
            type="text"
            placeholder="Search my thoughts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <div className="p-2 border-t border-gray-100">
              {query.length > 0 && query.length < 50 && (
                <div className="text-xs text-gray-500 py-1">
                  Searching for "{query}"...
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => { setIsOpen(false); setQuery(""); }}
            className="w-full text-center px-3 py-2 text-sm text-[#8b6f47] hover:text-[#6b533a] transition"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}