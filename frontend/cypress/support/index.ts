import { HtmlContext } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

export {};

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Logs in into QAZP using the Administrator account
             */
            login(): Chainable<JQuery<HTMLElement>>,
            logout(): Chainable<JQuery<HTMLElement>>
        }
    }
}