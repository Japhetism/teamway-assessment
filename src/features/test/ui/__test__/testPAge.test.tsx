import { render, screen, within } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import { RecoilRoot } from "recoil";
import Test from "..";

const renderer = createRenderer();

const defaultComponent = <RecoilRoot><Test /></RecoilRoot>;

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Unit test for test page ", () => {

    it("should render and match the snapshot", () => {
        renderer.render(defaultComponent);
        const renderedOutput = renderer.getRenderOutput();

        expect(renderedOutput).toMatchSnapshot();
    });

    it("should have title as Your result", () => {
        const { getByRole } = render(defaultComponent);
        const titleHeading = getByRole("heading", { name: "Are you an introvert or an extrovert?" });

        expect(titleHeading).toBeVisible();
    });

});
