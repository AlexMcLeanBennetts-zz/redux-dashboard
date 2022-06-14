import { screen, render } from 'tests/utils/test-utils'
import Main from 'views/Main';


describe('On the main component it should have', () => {
    beforeEach(() => {
        render(<Main />);
    })
    it('A title with the customers name', async () => {

        const greetingMessage = await screen.findByText(/Welcome back, Steve!/i)
        expect(greetingMessage).toBeInTheDocument();

    })

    it('A button to make changes to the policy', () => {

        const makeAChangeButton = screen.getByRole('button', { name: 'Make A Change' });
        expect(makeAChangeButton).toBeInTheDocument();

    })

})
