import { useState } from "react";

type Tab = {
  title: string;
  content: any;
};

const Tab = ({ tabs }: { tabs: Tab[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tab-container">
      <div className="tab-headers">
        {tabs.map((tab: Tab, index: number) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
