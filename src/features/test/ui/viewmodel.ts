import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TestApi from "../data/TestApi";
import useTestStore from "../data/TestStore";
import TestRepository from "../domain/TestRepository";

export default function ViewModel() {
    const repository: TestRepository = new TestRepository(new TestApi(), useTestStore());

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [errorTitle, setErrorTitle] = useState<string | null>(null);
    const [questionNumber, setQuestionNumber] = useState(1);

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

    function onNextQuestionClick(totalQuestion: number): void {
        if (totalQuestion === questionNumber) {
            navigate('/personality/result', { replace: true });
        } else {
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
