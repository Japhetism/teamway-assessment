import { render, within } from "@testing-library/react";
import { createRenderer } from "react-test-renderer/shallow";
import Question from "../question";
import { getQuestionHelper } from "../../utils/helper";

const renderer = createRenderer();

describe("Question Component", () => {

    it("should render and match the snapshot", () => {
        const { details, questionNumber, totalQuestion } = getQuestionHelper(1);
        renderer.render(
            <Question
                question={details?.question}
                options={details?.options}
                questionNumber={questionNumber}
                totalQuestions={totalQuestion}
                onBtnClick={() => {}}
            />
        );
        const renderedOutput = renderer.getRenderOutput();

        expect(renderedOutput).toMatchSnapshot();
    });

    it("should show next button", () => {
        const { details, questionNumber, totalQuestion } = getQuestionHelper(1);
        const { getByRole} = render(
            <Question
                question={details?.question}
                options={details?.options}
                questionNumber={questionNumber}
                totalQuestions={totalQuestion}
                onBtnClick={() => {}}
            />
        );

        const nextBtn = getByRole("button", { name: "Next Question"});

        expect(nextBtn).toBeVisible();
    });

    it("should show finish button if on the last question", () => {
        const { details, questionNumber, totalQuestion } = getQuestionHelper(14);
        const { getByRole} = render(
            <Question
                question={details?.question}
                options={details?.options}
                questionNumber={questionNumber}
                totalQuestions={totalQuestion}
                onBtnClick={() => {}}
            />
        );

        const nextBtn = getByRole("button", { name: "Finish Test"});

        expect(nextBtn).toBeVisible();
    });

    it("should have error component within question component", () => {
        const { error, details, questionNumber, totalQuestion } = getQuestionHelper(17);
        const { getByTestId } = render(
            <Question
                question={details?.question}
                options={details?.options}
                questionNumber={questionNumber}
                totalQuestions={totalQuestion}
                error={error}
                onBtnClick={() => {}}
            />
        );

        const questionComponent = getByTestId("question-component");
        const errCompWithinQuestComp = within(questionComponent).getByTestId("error-component");

        expect(errCompWithinQuestComp).toBeVisible();
    });
});
