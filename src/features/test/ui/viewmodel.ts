import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TestApi from "../data/TestApi";
import useTestStore from "../data/TestStore";
import TestRepository from "../domain/TestRepository";
import { getQuestionAnswerType } from "../../../utils/helper";

export default function ViewModel() {
    const repository: TestRepository = new TestRepository(new TestApi(), useTestStore());

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errorTitle, setErrorTitle] = useState<string | null>(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [answers, setAnswers] = useState<string[]>([]);

    function fetchTest(): void {
        setLoading(true);
        repository.fetchTest(questionNumber)
            .catch(error => {
                setErrorTitle("Unable to fetch question, try again!");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function getTestAnswerOptions(): {extrovertOptions: string[] | [], introvertOptions: string[] | []} {
        return {
            extrovertOptions: repository.getTest()?.details?.extrovert || [],
            introvertOptions: repository.getTest()?.details?.introvert || []
        }
    }

    function onNextQuestionClick(totalQuestion: number, answer: string): void {
        const testAnswerOptions = getTestAnswerOptions();
        const answerType = getQuestionAnswerType(answer, testAnswerOptions.extrovertOptions, testAnswerOptions.introvertOptions)
        if (totalQuestion === questionNumber) {
            setAnswers([...answers, answerType])
            navigate('/personality/result', { replace: true });
        } else {
            setAnswers([...answers, answerType])
            setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
        }
    }

    return {
        loading,
        errorTitle,
        test: repository.getTest(),
        fetchTest,
        questionNumber,
        onNextQuestionClick,
    };
}
