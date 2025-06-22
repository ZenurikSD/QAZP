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
            logout(): Chainable<JQuery<HTMLElement>>
        }
    }
}