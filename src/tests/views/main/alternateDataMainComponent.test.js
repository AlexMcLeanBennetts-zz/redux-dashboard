
import App from 'App';
import testData from 'tests/mocks/data/testData';
import resetServer from 'tests/utils/functions/resetServer';

import { screen, render } from 'tests/utils/setup/renderWithReduxAndRouter'

describe('When there is incomplete data', () => {
    it('if there is no name it shows "guest" instead', async () => {
        let response = { ...testData }
        response.policyHolder.name = '';

        resetServer(response);

        render(<App />)

        const greetingMessage = await screen.findByText(/Welcome Back, Guest!/i);
        expect(greetingMessage).toBeInTheDocument();
    })
})

describe('When the policy is lapsed', () => {
    beforeEach(() => {
        let response = { ...testData };
        response.policyDetails.start = '2020-01-01';
        response.policyDetails.end = '2021-01-01';

        resetServer(response);

        render(<App />);
    })

    it('should show if the policy is inactive', async () => {
        const inactivePolicy = await screen.findByText('Inactive Policy');
        expect(inactivePolicy).toBeInTheDocument();
    })
    it('should have a green indicator next to the active policy text', async () => {
        const inactivePolicyIndicator = await screen.findByTestId('policyStatusIndicator')
        expect(inactivePolicyIndicator).toHaveClass('bg-red-600');
    })
})

describe('The No claims discount text changes depending on the amount of years', () => {
    it('when there are multiple years it displays the number and then "years" afterward', async () => {
        let response = { ...testData };
        response.policyHolder.NCB = 3;
        resetServer(response);

        render(<App />)

        const ncdDiscount = await screen.findByText('3 years');
        expect(ncdDiscount).toBeInTheDocument();
    })
    it('when is a single years it displays the number and then "year" afterward', async () => {
        let response = { ...testData };
        response.policyHolder.NCB = 1;
        resetServer(response);

        render(<App />)

        const ncdDiscount = await screen.findByText('1 year');
        expect(ncdDiscount).toBeInTheDocument();
    })
    it('when there is no years it displays some text', async () => {
        let response = { ...testData };
        response.policyHolder.NCB = 0;
        resetServer(response);

        render(<App />)

        const ncdDiscount = await screen.findByText("You currently do not have any No Claims Discount");
        expect(ncdDiscount).toBeInTheDocument();
    })
})


