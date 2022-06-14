import { server } from 'tests/mocks/server';
import { rest } from 'msw';
import testData from 'tests/mocks/data/testData';

import { screen, render } from 'tests/setup/utils/test-utils'
import Main from 'views/Main';

describe('When there is incomplete data', () => {
    it('if there is no name it shows "guest" instead', async () => {
        let response = testData
        response.policyHolder.name = '';

        server.resetHandlers(
            rest.get('http://localhost:3030/dashboard', (req, res, ctx) => {
                return (res(ctx.status(response)))
            })
        )

        render(<Main />)

        const greetingMessage = await screen.findByText(/Welcome Back, Guest!/i);
        expect(greetingMessage).toBeInTheDocument();
    })
})