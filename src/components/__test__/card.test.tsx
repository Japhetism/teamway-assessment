import { render, screen, within } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Card from "../card";
import { landingPageContent } from "../../constants/landingPageContent";

const renderer = createRenderer();

describe("Card Component", () => {
    const { title, description, linkName, linkUrl, image } = landingPageContent[0];
    it("should render and match the snapshot", () => {
        renderer.render(
            <Card
                key={1}
                title={title}
                description={description}
                linkName={linkName}
                linkUrl={linkUrl}
                image={image}
            />
        );
        const renderedOutput = renderer.getRenderOutput();

        expect(renderedOutput).toMatchSnapshot();
    });
});
