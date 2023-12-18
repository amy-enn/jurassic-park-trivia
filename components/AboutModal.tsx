

interface AboutProps {
    onClose: () => void;
}

export default function About({ onClose }: AboutProps) {


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-lime-900 p-6 rounded-lg w-3/4 shadow-lg border-4 border-yellow-950 overflow-auto max-h-3/4">

                <h3 className="text-xl my-2 font-bold">
                    Jurassic Park Trivia
                </h3>

                <p className="text-sm my-2">
                    This project provides a json dataset, an API with 2 endpoints, and a front end interface for trivia questions related to the Jurassic Park movie.  I wanted to practice writing and deploying simple Next.js API endpoints to Vercel, and I ended up continuing on and adding a cute front end for this simple trivia game.
                </p>

                <p className="text-sm my-2">The front-end for this app is built with React (Typescript), and it uses Tailwind CSS for styling.</p>

                <p className="mt-4 mb-1 font-bold">🦖 API Endpoints</p>

                <p className="text-sm">1. Get 10 Random Trivia Questions</p>

                <ul className="text-xs">
                    <li className="my-1">- Endpoint: <code>/api/triviagame</code></li>
                    <li className="my-1">- Method: <code>GET</code></li>
                    <li className="my-1">- Description: Returns a random selection of 10 trivia questions.</li>
                    <li className="my-1">- Response Format: An array of objects, each representing a trivia question with its ID, text, options, and answer.</li>
                </ul>

                <p className="text-sm">2. Get Trivia Question by ID</p>
                <ul className="text-xs">

                    <li className="my-1">- Endpoint: <code>/api/trivia/[id]</code></li>
                    <li className="my-1">- Method: <code>GET</code></li>
                    <li className="my-1">- Description: Retrieves a specific trivia question by its ID.</li>
                    <li className="my-1">- Parameter:<code>id</code> (integer) - uniquely identifies each trivia question.</li>
                    <li className="my-1">- Response Format: An object representing the trivia question with its ID, text, options, and answer.</li>
                </ul>

                <p className="mt-4 mb-1 font-bold">🦖 Front End Features</p>

                <ul className="text-xs">

                    <li className="my-1">- Start Game: Users can initiate a new trivia game session.</li>
                    <li className="my-1">- Trivia Questions: Presents 10 random trivia questions fetched from the API.</li>
                    <li className="my-1">- Answer Selection: Three answer choices are provided for the user to select from.</li>
                    <li className="my-1">- Score Calculation: Tracks responses and calculates the score based on correct answers.</li>
                    <li className="my-1">- Result Display: At the end of the game, displays the score and offers an option to restart the game.</li>
                </ul>

                <p className="mt-4 mb-1 font-bold">🦖 Future Features</p>

                <ul className="text-xs">
                    <li className="my-1">- Providing feedback on which questions were guessed incorrectly</li>
                    <li className="my-1">- Additional API endpoint to retrieve a *custom* number of questions</li>
                    <li className="my-1">- Adding additional trivia questions for more variety (currently 40)</li>
                </ul>



                <button onClick={onClose} className="mt-4 px-4 py-2 rounded-3xl border-yellow-950 border-4 text-black text-sm bg-green-700">Close</button>
            </div>
        </div>
    );
}