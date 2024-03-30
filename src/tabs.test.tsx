import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";
import "@testing-library/jest-dom";

describe("Tabs component", () => {
  const tabs = [
    { title: "Tab 1", content: "Content of tab 1" },
    { title: "Tab 2", content: "Content of tab 2" },
    { title: "Tab 3", content: "Content of tab 3" },
  ];

  test("renders tabs correctly", () => {
    const { getByText } = render(<Tabs tabs={tabs} />);
    tabs.forEach(({ title }) => {
      expect(getByText(title)).toBeInTheDocument();
    });
  });

  test("renders content of the active tab", () => {
    const { getByText } = render(<Tabs tabs={tabs} />);
    expect(getByText("Content of tab 1")).toBeInTheDocument();
  });

  test("changes active tab when clicking on a tab button", () => {
    const { getByText } = render(<Tabs tabs={tabs} />);
    fireEvent.click(getByText("Tab 2"));
    expect(getByText("Content of tab 2")).toBeInTheDocument();
  });
});
