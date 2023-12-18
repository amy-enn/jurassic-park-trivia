import { useState } from "react";
import Question from "@/components/Question";

interface TriviaQuestion {
  id: number,
  question: string,
  options: string[],
  answer: string;
}

export default function Home() {

  const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [userResponses, setUserResponses] = useState<number[]>([]);

  async function startGame() {
    try {
    let response = await fetch('/api/triviagame');
    let questions = await response.json();
    setTriviaQuestions(questions);
    setShowQuestion(true);
  } catch (error) {
    console.error("Failed to fetch trivia questions:", error);
  }
};

function handleAnswer(answer: string) {
  const correct = triviaQuestions[currentQuestionIndex].answer === answer;
  setUserResponses([...userResponses, correct ? 1 : 0]);
  // TODO add logic to move to next question and end game
};


function handleClose() {
  setShowQuestion(false);
};


  return (

    <div className="font-mono bg-green-900 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl p-2 border-4 border-yellow-950 bg-green-200 rounded-3xl">
        🦕 jurassic park trivia 🦖
      </h1>
      <button onClick={startGame} className="my-4 px-3 py-1 rounded-3xl border-yellow-950 border-4 text-lg bg-green-600">START!</button>
      <div id="linksDiv" className="flex flex-row">
        <a href="#" className="mx-2 text-xs">GitHub</a>
        <a href="#" className="mx-2 text-xs">About</a>
      </div>
      {showQuestion && triviaQuestions.length > 0 && (
        <Question
          question={triviaQuestions[currentQuestionIndex].question}
          options={triviaQuestions[currentQuestionIndex].options}
          onClose={handleClose}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  )
}

