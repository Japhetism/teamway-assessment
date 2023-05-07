import Alert from "./alert";
import { getButtonText } from "../utils/helper";

export default function Question({
    questionNumber,
    totalQuestions,
    question,
    options,
    onBtnClick,
    error,
}: QuestionProps) {
    return (
        <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-white mt-10">
            {!error && (
                <>
                    <div className="px-6 py-4">
                        <p>{`Question ${questionNumber}/${totalQuestions}`}</p>
                        <div className="font-bold text-xl mb-2 mt-10">{question}</div>
                        <p><small>All questions are required</small></p>
                        <div className="mt-10">
                            {options && Object.keys(options).map((key: string) => (
                                <div className="flex items-center mb-4" key={key}>
                                    <input id={`default-radio-${key}`} type="radio" value={key} name="default-radio" className="w-4 h-4 text-black-600 bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor={`default-radio-${key}`}className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{options[key]}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => onBtnClick(totalQuestions || 0)}>
                            {getButtonText(questionNumber || 0, totalQuestions || 0)}
                        </button>
                    </div>
                </>
            )}
            {error && (
                <Alert errorMessage={error} />
            )}
        </div>
    );
}

interface QuestionProps {
    questionNumber: number | null | undefined;
    totalQuestions: number | null | undefined;
    question: string | null | undefined;
    options: any | null | undefined;
    error?: string;
    onBtnClick: (totalQuestion: number) => void;
}
