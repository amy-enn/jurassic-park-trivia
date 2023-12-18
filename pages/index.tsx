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



  function handleAnswerSubmission(selectedAnswer: string) {
    let isCorrect = selectedAnswer === triviaQuestions[currentQuestionIndex].answer;
    setUserResponses([...userResponses, isCorrect ? 1 : 0]);

    if (currentQuestionIndex < triviaQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // TODO handle the end of the game (e.g., show results)
    }
  };


  function handleClose() {
    setShowQuestion(false);
  };


  return (

    <div className="font-mono bg-lime-900 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl p-2 border-4 border-yellow-950 bg-lime-700 rounded-3xl">
        🦕 jurassic park trivia 🦖
      </h1>
      <button onClick={startGame} className="my-4 px-3 py-1 rounded-3xl border-yellow-950 border-4 text-lg bg-green-700">START!</button>
      <div id="linksDiv" className="flex flex-row">
        <a href="#" className="mx-2 text-xs">GitHub</a>
        <a href="#" className="mx-2 text-xs">About</a>
      </div>
      {showQuestion && triviaQuestions.length > 0 && (
        <Question
          question={triviaQuestions[currentQuestionIndex].question}
          options={triviaQuestions[currentQuestionIndex].options}
          onClose={handleClose}
          onAnswer={handleAnswerSubmission}
        />
      )}
    </div>
  )
}

