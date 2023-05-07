
export default function Question({
    questionNumber,
    totalQuestions,
    question,
    options
}: QuestionProps) {

    return (
        <div className="max-w-3xl rounded overflow-hidden shadow-lg bg-white mt-10">
            <div className="px-6 py-4">
                <p>Question 1/10</p>
                <div className="font-bold text-xl mb-2 mt-10">You’d get more done if:</div>
                <p><small>All questions are required</small></p>
                <div className="mt-10">
                    <div className="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-black-600 bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">You could be more focused</label>
                    </div>
                    <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-black-600 bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">There were more hours in the day</label>
                    </div>
                    <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-black-600 bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">You knew you would get it right the first time</label>
                    </div>
                    <div className="flex items-center mb-4">
                    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-black-600 bg-gray-100 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Things were more straightforward</label>
                    </div>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Next Question</button>
            </div>
        </div>
    );
}

interface QuestionProps {
    questionNumber: number;
    totalQuestions: number;
    question: string;
    options: any;
}
