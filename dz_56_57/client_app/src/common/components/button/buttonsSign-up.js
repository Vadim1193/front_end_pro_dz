import Button from "./button";

export const Buttons = {
    BtnRegister: new Button({
        class: 'btn-register',
        value: 'Register',
        name: 'btn_register'
    }),

    BtnSignIn: new Button ({
        class: 'btn-signIn',
        value: `I'm already registered`,
        name: 'btn_signIn'
    }),

    BtnFacebook: new Button ({
        class: 'btn-facebook',
        value: 'Facebook',
        name: 'facebook'
    }),

    BtnGoogle: new Button ({
        class: 'btn-google',
        value: 'Google',
        name: 'google'
    }),
}