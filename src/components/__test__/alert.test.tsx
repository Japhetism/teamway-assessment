import { createRenderer } from "react-test-renderer/shallow";
import Alert from "../alert";

const renderer = createRenderer();

const defaultComponent = <Alert errorMessage="" />;

describe("Alert Component", () => {

    it("should render and match the snapshot", () => {
        renderer.render(defaultComponent);
        const renderedOutput = renderer.getRenderOutput();

        expect(renderedOutput).toMatchSnapshot();
    });
});
