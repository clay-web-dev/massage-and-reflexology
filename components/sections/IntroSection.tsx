import React, { useState } from "react";
import ResidentialTab from "../Home/ServicesTab/ResidentialTab";
import ExteriorTab from "../Home/ServicesTab/ExteriorTab";
import CommercialTab from "../Home/ServicesTab/CommercialTab";

const IntroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-slate-200">
      <div className="max-w-screen-sm m-auto py-5 max-sm:px-4">
        <div className="flex text-sm max-sm:text-[10px]">
          <button
            className={`p-6 uppercase font-bold border-r-2 border-black border-opacity-10 w-1/3 flex-1 ${
              activeTab === 1 ? "bg-blue-900 text-white" : "bg-gray-100"
            }`}
            onClick={() => changeTab(1)}
          >
            Residential
          </button>
          <button
            className={`p-6 uppercase font-bold border-r-2 border-black border-opacity-10 w-1/3 flex-1 ${
              activeTab === 2 ? "bg-blue-900 text-white" : "bg-gray-100"
            }`}
            onClick={() => changeTab(2)}
          >
            Commercial
          </button>
          <button
            className={`p-6 uppercase font-bold flex-1 w-1/3 ${
              activeTab === 3 ? "bg-blue-900 text-white" : "bg-gray-100"
            }`}
            onClick={() => changeTab(3)}
          >
            Exterior
          </button>
        </div>
        <div className="bg-white text-base p-5">
          {activeTab === 1 && <ResidentialTab />}
          {activeTab === 2 && <CommercialTab />}
          {activeTab === 3 && <ExteriorTab />}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
