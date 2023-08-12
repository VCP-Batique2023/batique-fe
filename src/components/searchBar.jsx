import React, { useState } from 'react';
import '@/assets/style/searchBar.css'; // Import your CSS or SCSS file

export default function searchBar() {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive(!isActive);

  return (
    <div className="cntr">
      <div className="cntr-innr">
        <label className={`search ${isActive ? 'active' : ''}`} htmlFor="inpt_search">
          <input
            id="inpt_search"
            type="text"
            onFocus={toggleActive}
            onBlur={() => setIsActive(false)}
          />
        </label>
      </div>
    </div>
  );
}

