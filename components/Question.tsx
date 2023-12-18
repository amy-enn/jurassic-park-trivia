import { useState } from 'react';

interface QuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
    onClose: () => void;
}

export default function Question({ question, options, onAnswer, onClose }: QuestionProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    function handleAnswerClick(answer: string) {
        setSelectedAnswer(answer);
        onAnswer(answer);
    };



    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <div className="bg-green-800 p-6 rounded-lg w-2/3 shadow-lg border-4 border-yellow-950">
                <h2 className="text-xl font-bold mb-4">{question}</h2>
                <div className="space-y-3">
                    {options.map((option, index) => (
                        <button key={index} className="block w-full text-left px-4 py-2 text-normal text-black rounded-lg hover:bg-green-600 focus:outline-none focus:ring" onClick={() => handleAnswerClick(option)}>
                            {option}
                        </button>
                    ))}
                </div>
                <button onClick={onClose} className="mt-4 px-4 py-2 bg-green-600 text-black rounded-3xl border-4 border-yellow-950">Close</button>
            </div>
        </div>
    );
};
