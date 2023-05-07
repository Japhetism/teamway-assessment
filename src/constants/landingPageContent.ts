import RelationshipImage from "../assets/images/relationship.png";
import TimeMgtImage from "../assets/images/time.jpeg";
import EmotionalImage from "../assets/images/emotional.png";
import IntroExtroImage from "../assets/images/introextro.png"

export const landingPageContent = [
    {
        title: "Are you an introvert or an extrovert?",
        description: "An introvert is a person who remains isolated, or enjoys the company of few closed ones. An extrovert is an outgoing and outspoken person who enjoys being around and talking to people. They think before speaking. They reason things out by speaking them.",
        linkName: "Take Test",
        linkUrl: "/personality/take-test",
        image: IntroExtroImage
    },
    {
        title: "What do you need for love to flourish?",
        description: "Whether you’re single and looking to find your soulmate, or fear the fire in a long-term partnership has fizzled out, take our test to discover what you should foster to let love in, and thrive",
        linkName: "Find Out More",
        linkUrl: "/personality/relationship",
        image: RelationshipImage
    },
    {
        title: "Where do you slip up when creating wellness goals?",
        description: "Whether you love or loathe new year’s resolutions, changing our lifestyle habits is often easier said than done. Take this test, put together by Noom - the digital health platform focused on behaviour change - to make modifications that last",
        linkName: "Read More",
        linkUrl: "/personality/emotional-wellbeing",
        image: EmotionalImage
    },
    {
        title: "What stops you making the most of your time?",
        description: "Time management is the process of organizing and planning how to divide your time between different activities. Get it right, and you'll end up working smarter, not harder, to get more done in less time – even when time is tight and pressures are high. The highest achievers manage their time exceptionally well.",
        linkName: "Read More",
        linkUrl: "/personality/time-management",
        image: TimeMgtImage
    }
];