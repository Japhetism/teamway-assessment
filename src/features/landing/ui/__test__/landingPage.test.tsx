import { fireEvent, render, screen } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import { act } from "react-test-renderer";
import Landing from "..";

const renderer = createRenderer();

const defaultComponent = <Landing />;

describe("Unit test for landing page ", () => {
    it("should render and match the snapshot", () => {
        renderer.render(defaultComponent);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
