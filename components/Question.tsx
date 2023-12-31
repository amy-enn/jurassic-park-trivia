import { useState } from 'react';

interface QuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
    onClose: () => void;
    currentQuestionIndex: number;
    totalQuestions: number;
}

export default function Question({ question, options, onAnswer, onClose, currentQuestionIndex, totalQuestions }: QuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);


    function handleAnswerClick(answer: string) {
        setSelectedAnswer(answer);
        console.log(answer);
    };

    function handleSubmit() {
        if (selectedAnswer) {
            onAnswer(selectedAnswer);
        }
    }



    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex  justify-center items-center">
            <div className="bg-green-800 p-4 rounded-lg w-3/4 max-h-[90vh] shadow-lg border-4 border-yellow-950 overflow-y-auto flex flex-col justify-center">
                <div className="mb-4">Question {currentQuestionIndex + 1}/{totalQuestions}</div>
                <h2 className="text-lg font-bold mb-4">{question}</h2>
                <div>
                    {options.map((option, index) => (
                        <button 
                        key={index} 
                        className={`block w-full text-left px-4 py-2 text-normal text-black rounded-lg ${selectedAnswer === option ? 'bg-green-600' : 'hover:bg-green-600'}`}
                        onClick={() => handleAnswerClick(option)}
                      >
                            {option}
                        </button>
                    ))}
                </div>
                <div id="buttonsDiv" className="flex flex-col sm:flex-row justify-between">
                <button 
                      className="mt-2 px-2 py-2 bg-green-600 text-black rounded-3xl border-4 border-yellow-950"
                      onClick={handleSubmit}
                    >Submit</button>

                <button onClick={onClose} className="mt-4 px-4 py-2 text-gray-800 text-xs">close</button>
            </div>
                </div>
        </div>
    );
};
