import React, { useState } from "react";
import classnames from "classnames";

type TabProps = {
  title: string;
  content: React.ReactNode;
};

const Tabs: React.FC<{ tabs: TabProps[] }> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activeTabContent = tabs[activeTab].content;

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        {tabs.map((tab: TabProps, index: number) => (
          <button
            key={index}
            className={classnames(
              "flex-auto cursor-pointer p-2 border-b-2 border-solid",
              {
                "border-b-customBlue": index === activeTab,
                "border-b-customGray": index !== activeTab,
              }
            )}
            onClick={() => setActiveTab(index)}
          >
            <span
              className={classnames("text-sm font-semibold text-center", {
                "text-customBlue": index === activeTab,
                "text-customGray": index !== activeTab,
              })}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <div className="text-sm text-customGray px-2 py-4">
        {activeTabContent}
      </div>
    </div>
  );
};

export default Tabs;
