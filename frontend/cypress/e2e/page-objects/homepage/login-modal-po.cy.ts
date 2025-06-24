export class LoginModal{
    private usernameId = 'login-username-input';
    private passwordId = 'login-password-input';
    private enterButtonId = 'login-enter-button';
    private openButtonId = 'login-open-button';
    private closeButtonId = 'login-close-button';

    typeUsername(text: string){
        cy.get(`[data-testid="${this.usernameId}"]`).type(text);
    }
    typePassword(text: string){
        cy.get(`[data-testid="${this.passwordId}"]`).type(text);
    }
    clickEnter(){
        cy.get(`[data-testid="${this.enterButtonId}"]`).click();
    }
    open(){
        cy.get(`[data-testid="${this.openButtonId}"]`).click();
    }
    closeModal(){
        cy.get(`[data-testid="${this.closeButtonId}"]`).click();
    }
    login(user: string, pass: string){
        this.typeUsername(user);
        this.typePassword(pass);
        this.clickEnter();
    }
}