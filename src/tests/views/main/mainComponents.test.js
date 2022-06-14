import { screen, render } from 'tests/setup/utils/test-utils'
import Main from 'views/Main';
import testData from 'tests/mocks/data/testData';


describe('On the main component it should have', () => {
    beforeEach(() => {
        render(<Main />);
    })
    it('A title with the customers name', async () => {

        const greetingMessage = await screen.findByText(/Welcome back, Steve!/i)
        expect(greetingMessage).toBeInTheDocument();

    })

    it('A button to make changes to the policy', async () => {

        const makeAChangeButton = await screen.findByRole('button', { name: 'Make A Change' });
        expect(makeAChangeButton).toBeInTheDocument();

    })

    it('The make and model of the car displayed', async () => {
        const makeAndModel = `${testData.car.make} ${testData.car.model}`;

        const makeAndModelInDocument = await screen.findByText(makeAndModel);
        expect(makeAndModelInDocument).toBeInTheDocument();
    })

    it('should display the registration', async () => {
        const registrationText = await screen.findByText(testData.car.registration);
        expect(registrationText).toBeInTheDocument();
    })

    it('Should have a button to view more details', async () => {
        const viewPolicyDetailsButton = await screen.findByRole('button', { name: "View policy details" });
        expect(viewPolicyDetailsButton).toBeInTheDocument();
    })

})
