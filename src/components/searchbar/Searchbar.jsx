import { useState } from 'react';
import Image from 'next/image';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="search-container">
      <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
        {/* Search Icon or Search Input */}
        {isExpanded ? (
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            onBlur={() => setIsExpanded(false)} // Collapse when focus is lost
            autoFocus
          />
        ) : (
            <Image src="/search.png" alt="" height={20} width={20} className="search-icon" onClick={toggleSearchBar}/>
        )}
      </div>

      {/* Add styles using Styled JSX */}
      <style jsx>{`
        .search-container {
          display: flex;
          align-items: center;
        }
        .search-bar {
          position: relative;
          width: 40px;
          height: 40px;
          transition: width 0.4s ease;
          background-color: #f0f0f0;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .search-bar.expanded {
          width: 250px; /* Expanded width */
          background-color: white;
          border-radius: 25px;
          padding: 0 10px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .search-icon {
          cursor: pointer
        }
        .search-input {
          border: none;
          outline: none;
          width: 100%;
          height: 100%;
          font-size: 16px;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
