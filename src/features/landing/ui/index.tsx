import Card from "../../../components/card";
import IntroExtroImg from "../../../assets/images/introextro.jpeg";
import { landingPageContent } from "../../../constants/landingPageContent";

interface LandingPageContentProps {
    title: string;
    description: string;
    linkName: string;
    linkUrl: string;
    image: string;
}

export default function Landing(): JSX.Element {
    return (
        <>
            <img src={IntroExtroImg} alt="Jap Psychologies" className="w-3/5 h-2/5" />
            <div className="grid grid-rows-4 gap-10 py-10">
                {landingPageContent.map((content: LandingPageContentProps) => (
                    <Card 
                        title={content.title}
                        description={content.description}
                        linkName={content.linkName}
                        linkUrl={content.linkUrl}
                        image={content.image}
                    />
                ))}
            </div>
        </>
    );
}