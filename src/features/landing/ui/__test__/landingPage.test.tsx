import { fireEvent, render, screen, within } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import { act } from "react-test-renderer";
import Landing from "..";
import { landingPageContent } from "../../../../constants/landingPageContent";

const renderer = createRenderer();

const defaultComponent = <Landing />;

describe("Unit test for landing page ", () => {

    it("should render and match the snapshot", () => {
        renderer.render(defaultComponent);
        const renderedOutput = renderer.getRenderOutput();

        expect(renderedOutput).toMatchSnapshot();
    });
    
    it("should have a banner image with Jap Psychologies as attribute", () => {
        const { getByTestId} = render(defaultComponent);
        const bannerImage = getByTestId("banner-image");

        expect(bannerImage).toHaveAttribute("alt", "Jap Psychologies");
    });

    it("should have a banner image with a defined src", () => {
        const { getByTestId} = render(defaultComponent);
        const bannerImage = getByTestId("banner-image");

        expect(bannerImage).toHaveAttribute("src", "introextro.jpeg");
    });

    it("should have exact number of cards for landing page content object length", () => {
        const { getByTestId } = render(defaultComponent);
        const cardHeader = getByTestId("card-header");
        const cardsInHeader = within(cardHeader).getAllByTestId("card");
        
        expect(cardsInHeader.length).toBe(landingPageContent.length);
    });

    it("should have a link to the test page", () => {
        render(defaultComponent);
        const testLink = screen.getByRole("link", { name: "Take Test" });
        
        expect(testLink).toHaveAttribute("href", "/personality/take-test");
    });

});
