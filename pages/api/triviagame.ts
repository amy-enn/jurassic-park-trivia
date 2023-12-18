import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface TriviaQuestion {
  id: number,
  question: string,
  options: string[],
  answer: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TriviaQuestion[]>
) {
  let filePath = path.join(process.cwd(), 'public', 'jurassic_trivia.json');
  let jsonData = fs.readFileSync(filePath, 'utf-8');
  let triviaQuestions: TriviaQuestion[] = JSON.parse(jsonData);

  let shuffled = triviaQuestions.sort(() => 0.5 - Math.random());
  let selectedQuestions = shuffled.slice(0, 10);

  res.status(200).json(selectedQuestions)
}
