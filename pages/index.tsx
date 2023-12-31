import { useState } from "react";
import Question from "@/components/Question";
import ScoreModal from "@/components/ScoreModal";
import AboutModal from "@/components/AboutModal";

interface TriviaQuestion {
  id: number,
  question: string,
  options: string[],
  answer: string;
}

export default function Home() {

  const [triviaQuestions, setTriviaQuestions] = useState<TriviaQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [userResponses, setUserResponses] = useState<number[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showAboutModal, setShowAboutModal] = useState<boolean>(false);

  async function startGame() {
    try {
      let response = await fetch('/api/triviagame');
      let questions = await response.json();
      setTriviaQuestions(questions);
      setCurrentQuestionIndex(0);
      setUserResponses([]);
      setShowQuestionModal(true);
      setGameOver(false);
    } catch (error) {
      console.error("Failed to fetch trivia questions:", error);
    }
  };



  function handleAnswerSubmission(selectedAnswer: string) {
    let isCorrect = selectedAnswer === triviaQuestions[currentQuestionIndex].answer;
    let updatedResponses = [...userResponses, isCorrect ? 1 : 0];
    setUserResponses(updatedResponses);

    if (currentQuestionIndex === triviaQuestions.length - 1) {
      setGameOver(true);
      setShowQuestionModal(false);
      let finalScore = updatedResponses.filter(res => res === 1).length;
      console.log("Game Over! Your score: ", score);
      setScore(finalScore);
    } else {

      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } 
  };

  function handleOpenAbout() {
    setShowAboutModal(true);
  }


  function handleClose() {
    setShowQuestionModal(false);
  };

  function handleCloseScore() {
    setGameOver(false);
  }


  return (

    <div className="font-mono bg-lime-900 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl p-2 m-2 border-4 text-center border-yellow-950 bg-lime-700 rounded-3xl">
        jurassic park trivia
      </h1>
      <p className="italic my-2 text-xs"><span className="text-lg">🦕</span> a tiny full-stack app <span className="text-lg">🦖</span></p>
      <button onClick={startGame} className="my-4 px-3 py-1 rounded-3xl border-yellow-950 border-4 text-lg bg-green-700">START!</button>
      <div id="linksDiv" className="flex flex-row">
        <a href="https://github.com/amy-enn/jurassic-park-trivia" className="mx-2 text-xs">GitHub</a>
        <button onClick={handleOpenAbout} className="mx-2 text-xs">About</button>
      </div>
      {showQuestionModal && triviaQuestions.length > 0 && (
        <Question
          question={triviaQuestions[currentQuestionIndex].question}
          options={triviaQuestions[currentQuestionIndex].options}
          onClose={handleClose}
          onAnswer={handleAnswerSubmission}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={triviaQuestions.length}
        />
      )}
      {gameOver && <ScoreModal score={score} totalQuestions={triviaQuestions.length} onRestart={startGame} onClose={handleCloseScore} />}
      {showAboutModal && <AboutModal onClose={() => setShowAboutModal(false)} />
}

    </div>
  )
}

