import { useEffect } from "react";
import Question from "../../../components/question";
import useViewModel from "./viewmodel";

export default function Test(): JSX.Element {
    const {
        loading,
        test,
        fetchTest,
        errorTitle,
        questionNumber,
        onNextQuestionClick,
    } = useViewModel();

    useEffect(fetchTest, [questionNumber]);

    return (
        <>
            <h1 className="text-4xl">Are you an introvert or an extrovert?</h1>
            <Question 
                question={test?.details?.question}
                options={test?.details?.options}
                questionNumber={test?.questionNumber}
                totalQuestions={test?.totalQuestion}
                onBtnClick={(totalQuestion: number) => onNextQuestionClick(totalQuestion)}
                error={errorTitle || test?.error}
            />
        </>
    );
}