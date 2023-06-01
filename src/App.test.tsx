import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import App from "./App";

const renderer = createRenderer();

test("should render App and match the snapshot", () => {
  renderer.render(<App />);
  const renderedOutput = renderer.getRenderOutput();

  expect(renderedOutput).toMatchSnapshot();
});
