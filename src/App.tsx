import Tabs from "./Tabs";

const App = () => {
  return (
    <Tabs
      tabs={[
        { title: "tab 1", content: <div>Content of tab 1</div> },
        { title: "tab 2", content: <div>Content of tab 2</div> },
      ]}
    />
  );
};

export default App;
