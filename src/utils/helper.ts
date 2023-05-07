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