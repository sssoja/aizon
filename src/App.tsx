import Tab from "./Tabs";

const App = () => {
  return (
    <Tab
      tabs={[
        { title: "Tab 1", content: <div>Tab 1 Content</div> },
        { title: "Tab 2", content: <div>Tab 2 Content</div> },
      ]}
    />
  );
};

export default App;
