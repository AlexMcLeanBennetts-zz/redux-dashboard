import { server } from 'tests/mocks/server';
import { rest } from 'msw';

function resetServer(response) {
    server.resetHandlers(
        rest.get('http://localhost:3030/dashboard', (req, res, ctx) => {
            return (res(ctx.status(response)))
        })
    )
}

export default resetServer;