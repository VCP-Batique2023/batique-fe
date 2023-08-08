import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '@/assets/style/dropdown.css'; 
import Button from './Button';



export default function dropdown({ options, onItemClick }) {
    const [selectedOption, setSelectedOption] = useState('Categories');
    const [isActive, setIsActive] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsActive(false);
        if (onItemClick) {
            onItemClick(option); 
        }
    };

    return (
        <div className="navigation">
            <div className={`select-menu ${isActive ? 'active' : ''}`}>
                <div className="select-btn" onClick={() => setIsActive(!isActive)}>
                    <span className="sBtn-text">{selectedOption}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    {/* <i className="bx bx-chevron-down"></i> */}
                
                </div>
                <ul className="options">
                    {options.map((option, index) => (
                        <li className="option" key={index} onClick={() => handleOptionClick(option.text)}>
                            <span className="option-text">{option.text}</span>
                            
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        // <div className={`select-menu ${isActive ? 'active' : ''}`}>
        //     <Button
        //         className="select-btn"
        //         onClick={() => setIsActive(!isActive)}
        //         variant="outlined"
        //         size="medium" // Adjust the size as needed
        //     >
        //         <span className="sBtn-text">{selectedOption}</span>
        //         <i className="bx bx-chevron-down"></i>
        //     </Button>
        //     <ul className="options">
        //         {options.map((option, index) => (
        //             <li className="option" key={index} onClick={() => handleOptionClick(option.text)}>
        //                 <span className="option-text">{option.text}</span>
        //             </li>
        //         ))}
        //     </ul>
        // </div>

    );
}
dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.string.isRequired,
        iconColor: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    onItemClick: PropTypes.func, 
};