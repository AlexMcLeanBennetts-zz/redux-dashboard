import { screen, render } from 'tests/utils/setup/renderWithReduxAndRouter';
import Main from 'views/Main';

describe('the main view should have a CTA section for multicar policies', () => {
    it('should have a heading', async () => {
        const multicarHeading = await screen.findByRole('heading', { name: /multicar/i });

        expect(multicarHeading).toBeInTheDocument();
    })
})