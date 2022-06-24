import { screen, render } from 'tests/utils/setup/renderWithReduxAndRouter';
import Main from 'views/Main';

describe('the main view should have a CTA section for multicar policies', () => {
    beforeEach(() => {
        render(<Main />)
    })

    it('should have a heading', async () => {
        let heading = "Save £50 on each additional car with out Multicar deal"
        const multicarHeading = await screen.findByRole('heading', { name: heading });

        expect(multicarHeading).toBeInTheDocument();
    })
})