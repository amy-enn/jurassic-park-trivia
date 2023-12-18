import type { NextApiRequest, NextApiResponse } from 'next';
import jsonData from '@/data/jurassic_trivia.json';

interface TriviaQuestion {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<TriviaQuestion | { message: string }>
) {
    let { id } = req.query;
    let triviaQuestions: TriviaQuestion[] = jsonData;

    let question = triviaQuestions.find(q => q.id === parseInt(id as string));

    if (question) {
        res.status(200).json(question);
    } else {
        res.status(404).json({ message: 'Trivia question not found' });
    }
}
