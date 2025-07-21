export {};

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Logs into QAZP
             * @param username 
             * @param password
             */
            login(username: string, password: string): Chainable<JQuery<HTMLElement>>,
            logout(): Chainable<JQuery<HTMLElement>>,
            /**
             * Sends a Quote Request through the API
             * @param requestBody An object with all necessary properties
             */
            sendQuoteRequest(requestBody: any): Chainable<any>,
            typeByTestId(testId: string, text: string): Chainable<HTMLElement>;
            clickByTestId(testId: string): Chainable<HTMLElement>;
        }
    }
}