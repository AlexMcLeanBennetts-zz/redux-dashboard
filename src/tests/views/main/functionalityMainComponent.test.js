import { screen, render } from 'tests/setup/utils/test-utils'
import App from 'views/Main';
import testData from 'tests/mocks/data/testData';
import userEvent from '@testing-library/user-event'


describe('When the make a change button is pressed', () => {
    beforeEach(() => {
        render(<App />);
    })

    it('changes the page to the amend details page', async () => {
        const makeAChangeButton = await screen.findByRole('button', { name: 'Make A Change' });

        userEvent.click(makeAChangeButton);

        const amendmentsTitle = await screen.findAllByRole('heading', { name: 'Amend Policy Details' })

        expect(amendmentsTitle).toBeInTheDocument();
    })
})