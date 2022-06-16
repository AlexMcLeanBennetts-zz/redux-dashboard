import { screen, render } from 'tests/utils/setup/renderWithReduxAndRouter'
import Main from 'views/Main';
import testData from 'tests/mocks/data/testData';

describe('It has an row of buttons with links to select pages', () => {
    beforeEach(() => {
        render(<Main />);
    })

    describe('It has a button linking to the quote page', () => {
        it('the button should have a link to the quote page', async () => {
            const quoteButton = await screen.findByRole('link', { name: /quotes/i })
            expect(quoteButton).toBeInTheDocument();
        })
        it('should have an image with the source for the quote image', async () => {
            const quoteImageUrl = "quotes.svg";
            const quoteImage = await screen.findByRole('img', { name: /quotes/i });
            expect(quoteImage).toHaveAttribute('src', quoteImageUrl);
        })
    })
    describe('It has a button linking to the documents page', () => {
        it('the button should have a link to the document page', async () => {
            const documentButton = await screen.findByRole('link', { name: /documents/i })
            expect(documentButton).toBeInTheDocument();
        })
        it('should have an image with the source for the document image', async () => {
            const documentImageUrl = "documents.svg";
            const documentImage = await screen.findByRole('img', { name: /documents/i });
            expect(documentImage).toHaveAttribute('src', documentImageUrl);
        })
    })
    describe('It has a button linking to the payments page', () => {
        it('the button should have a link to the payment page', async () => {
            const paymentButton = await screen.findByRole('link', { name: /payments/i })
            expect(paymentButton).toBeInTheDocument();
        })
        it('should have an image with the source for the payment image', async () => {
            const paymentImageUrl = "payments.svg";
            const paymentImage = await screen.findByRole('img', { name: /payments/i });
            expect(paymentImage).toHaveAttribute('src', paymentImageUrl);
        })
    })
    describe('It has a button linking to the claims page', () => {
        it('the button should have a link to the claims page', async () => {
            const claimsButton = await screen.findByRole('link', { name: /claims/i })
            expect(claimsButton).toBeInTheDocument();
        })
        it('should have an image with the source for the claims image', async () => {
            const claimsImageUrl = "policy.svg";
            const claimsImage = await screen.findByRole('img', { name: /claims/i });
            expect(claimsImage).toHaveAttribute('src', claimsImageUrl);
        })
    })
})