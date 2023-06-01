import { render, fireEvent, waitFor, act } from "@testing-library/react";
import Test from "..";
import { MutableSnapshot, RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { createRenderer } from "react-test-renderer/shallow";
import { testState } from "../../data/TestStore";

const renderer = createRenderer();

describe("Test State", () => {

  it("should render and match the snapshot", async () => {
    renderer.render(<BrowserRouter><Test /></BrowserRouter>, { wrapper: RecoilRoot });
    const renderedOutput = renderer.getRenderOutput();

    await act(() => {
      expect(renderedOutput).toMatchSnapshot();
    });
  });

  it("should have title as Are you an introvert or an extrovert?", async () => {
    const { getByRole } = render(<BrowserRouter><Test /></BrowserRouter>, { wrapper: RecoilRoot });
    await act(() => {
      const titleHeading = getByRole("heading", { name: "Are you an introvert or an extrovert?" });
      expect(titleHeading).toBeVisible();
    });
  });

  it("should have question component", async () => {
    const { getByTestId } = render(<BrowserRouter><Test /></BrowserRouter>, { wrapper: RecoilRoot });
    await act(() => {
      const questionComponent = getByTestId("question-component");
      expect(questionComponent).toBeVisible();
    });
  });
});
