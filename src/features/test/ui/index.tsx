import { useEffect } from "react";
import Question from "../../../components/question";
import useViewModel from "./viewmodel";
import { clearStorage } from "../../../utils/helper";

export default function Test(): JSX.Element {
    
    const {
        test,
        fetchTest,
        errorTitle,
        questionNumber,
        onNextQuestionClick,
    } = useViewModel();

   useEffect(fetchTest, [questionNumber]);

    useEffect(() => (
        clearStorage()
    ),[]);

    return (
        <div className="pb-20">
            <h1 className="text-4xl">Are you an introvert or an extrovert?</h1>
            <Question 
                question={test?.details?.question}
                options={test?.details?.options}
                questionNumber={test?.questionNumber}
                totalQuestions={test?.totalQuestion}
                onBtnClick={(totalQuestion: number, answer: string) => onNextQuestionClick(totalQuestion, answer)}
                error={errorTitle || test?.error}
            />
        </div>
    );
}