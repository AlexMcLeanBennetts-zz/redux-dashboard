import { rest } from 'msw';
import testData from './data/testData';

export const handlers = [
    rest.get('http://localhost:3030/dashboard', (req, res, ctx) => {
        return res(
            ctx.json(testData),
        )
    }),
]