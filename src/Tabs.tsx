import { useState } from "react";

type Tab = {
  title: string;
  content: any;
};

const Tabs = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div className="display: flex">
        {tabs.map((tab: Tab, index: number) => (
          <button
            key={index}
            className={
              index === activeTab
                ? "flex-[auto] cursor-pointer p-2 border-b-2 border-b-customBlue border-solid"
                : "flex-[auto] cursor-pointer p-2 border-b-2 border-b-customGray border-solid"
            }
            onClick={() => setActiveTab(index)}
          >
            <span
              className={
                index === activeTab
                  ? "text-customBlue text-sm font-semibold text-center"
                  : "text-customGray text-sm font-semibold text-center"
              }
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className="text-sm text-customGray px-2 py-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
