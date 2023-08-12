import '@/assets/style/SearchBox.css';
import { useState, useRef } from 'react';

export default function SearchBox({ search, placeholder, defaultVal, style }) {
  const [value, setValue] = useState(defaultVal || '');

  const searchRef = useRef(null);

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      search(value);
      setValue('');
      searchRef.current.blur();
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={style} className="search-box">
        <input
          ref={searchRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handlePress}
          type="search"
          style={{ paddingRight: value.length > 0 ? '30px' : 0 }}
          placeholder={placeholder}
        />
        {!value.length > 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={18}
            height={18}
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            style={{
              padding: 1,
              pointerEvents: 'all',
              backgroundColor: '#f0eee6',
              cursor: 'pointer',
            }}
            onClick={() => {
              setValue('');
              search('');
              searchRef.current.blur();
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={20}
            height={20}
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        )}
      </div>
    </div>
  );
}
