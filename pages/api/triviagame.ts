import type { NextApiRequest, NextApiResponse } from 'next';
import jsonData from '@/data/jurassic_trivia.json';

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
  let triviaQuestions: TriviaQuestion[] = jsonData;

  let shuffled = triviaQuestions.sort(() => 0.5 - Math.random());
  let selectedQuestions = shuffled.slice(0, 10);

  res.status(200).json(selectedQuestions)
}
