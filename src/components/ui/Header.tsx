import React, { useState } from "react";
import { Button } from "./button";
import { Link } from "react-router-dom";

interface HeaderProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
  states?: readonly string[];
}

export const Header: React.FC<HeaderProps> = ({
  selectedState,
  setSelectedState,
  states = ["Karnataka", "Tamil Nadu"],
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed w-[390px] min-h-[50px] sm:min-h-[65px] max-h-[50px] sm:max-h-[65px] bg-white shadow-md z-50 flex items-center">
      <div className="w-full max-w-screen-xl mx-auto flex flex-row items-center justify-between px-2">
        <Link to="/" className="cursor-pointer">
          <img
            className="min-h-[30px] sm:min-h-[40px] max-h-[30px] sm:max-h-[40px] min-w-[109px] sm:min-w-[145px] max-w-[109px] sm:max-w-[145px] object-contain"
            alt="MilkyMist"
            src="https://static.wixstatic.com/media/972f01_eec37aaba55849debf25ce804b886daa~mv2.png/v1/crop/x_4,y_0,w_436,h_120/fill/w_145,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MMD.png"
          />
        </Link>
        <div className="relative">
          <Button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#0b254d] rounded-full px-3 sm:px-6 flex items-center text-white text-sm sm:text-base font-light text-center min-w-[140px] sm:min-w-[180px] max-w-[140px] sm:max-w-[180px] justify-between h-[35px] sm:h-[40px]"
          >
            <span className="truncate">{selectedState || "Select State"}</span>
            <svg
              className={`min-w-3 sm:min-w-4 max-w-3 sm:max-w-4 min-h-3 sm:min-h-4 max-h-3 sm:max-h-4 ml-1 sm:ml-2 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => handleStateSelect(state)}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left transition-colors text-sm sm:text-base ${
                    selectedState === state
                      ? "bg-[#0b254d] text-white"
                      : "text-[#0b254d] hover:bg-gray-50"
                  } ${state === states[0] ? "rounded-t-lg" : ""} ${
                    state === states[states.length - 1] ? "rounded-b-lg" : ""
                  }`}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
