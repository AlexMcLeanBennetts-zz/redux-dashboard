import App from "App";
import { rest } from 'msw';
import { server } from 'tests/mocks/server';
import { screen, render } from 'tests/utils/setup/renderWithReduxAndRouter';

describe('When there is an error when fetching data', () => {
    it('shows on the screen the error', async () => {
        server.resetHandlers(
            rest.get('http://localhost:3030/dashboard', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        render(<App />)

        const error = await screen.findByText('Error:');
        expect(error).toBeInTheDocument();

    })
})