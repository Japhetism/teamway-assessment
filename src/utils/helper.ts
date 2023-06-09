import { questions } from "../constants/questions"

export const getQuestionHelper = (questionNumber: number) => {
    if (questions[questionNumber - 1]) {
        return {
            details: questions[questionNumber - 1],
            questionNumber,
            totalQuestion: questions.length
        }
    } else {
        return {
            error: "Invalid question number",
            questionNumber,
            totalQuestion: questions.length
        }
    }
    
}

export const getButtonText = (questionNumber: number, totalQuestions: number) => {
    return questionNumber === totalQuestions ? "Finish Test" : "Next Question";
}

export const getQuestionAnswerType = (answer: string, extrovertOptions: string[], introvertOptions: string[]) => {
    if (extrovertOptions.indexOf(answer)) {
        return "Extrovert";
    } else if (introvertOptions.indexOf(answer)) {
        return "Introvert";
    } else {
        return "";
    }
}

export const getFinalResultType = (answers: string[]) => {
    const extrovertCount = answers.filter(value => value === "Extrovert");
    const introvertCount = answers.filter(value => value === "Introvert");

    return extrovertCount > introvertCount ? "Extrovert" : "Introvert";
}

export const saveFinalResult = (result: string) => {
    localStorage.setItem("finalResult", result);
}

export const getFinalResult = () => {
    const result = localStorage.getItem("finalResult");
    return result;
}

export const clearStorage = () => {
    localStorage.clear();
}