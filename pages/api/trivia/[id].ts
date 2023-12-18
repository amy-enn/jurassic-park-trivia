import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

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
    let filePath = path.join(process.cwd(), 'public', 'jurassic_trivia.json');

    let jsonData = fs.readFileSync(filePath, 'utf8');
    let triviaQuestions: TriviaQuestion[] = JSON.parse(jsonData);

    let question = triviaQuestions.find(q => q.id === parseInt(id as string));

    if (question) {
        res.status(200).json(question);
    } else {
        res.status(404).json({ message: 'Trivia question not found' });
    }
}
