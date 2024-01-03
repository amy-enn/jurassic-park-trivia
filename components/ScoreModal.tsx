interface ScoreModalProps {
    score: number;
    totalQuestions: number;
    onRestart: () => void;
    onClose: () => void;
  }
  
  export default function ScoreModal({ score, totalQuestions, onRestart, onClose }: ScoreModalProps) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-lime-800 p-4 rounded-lg shadow-lg border-4 max-w-1/2 border-yellow-950">
          <h2 className="text-xl font-bold">Game Over!</h2>
          <p>Your Score: {score} / {totalQuestions}</p>
          <div id="buttonsDiv" className="flex flex-row justify-between">

          <button onClick={onRestart} className="mt-4 px-4 py-2 border-yellow-950 border-4 text-lg bg-green-700 text-black rounded-lg">Restart</button>
          <button onClick={onClose} className="mt-4 px-4 py-2 text-gray-800 text-xs">close</button>
          </div>
        </div>
      </div>
    );
  }
  