import Component from "@/plugins/component";
import './sign-up.scss';
import { AsFragment } from "@/common/decorators";
import { router } from "@/router/router";
import { InputsForm } from "@/common/components/input/formElem";
import { Buttons } from "@/common/components/button/buttonsSign-up";

export default class SignUp extends Component {
    updateTemplate(template) {

        const NameInput= InputsForm.NameInput.render();
        const SurameInput = InputsForm.SurameInput.render();
        const PhoneInput = InputsForm.PhoneInput.render();
        const EmailInput = InputsForm.EmailInput.render();
        const PasswordInput = InputsForm.PasswordInput.render();
        
        const BtnRegister = Buttons.BtnRegister.render();
        const BtnSignIn = Buttons.BtnSignIn.render();
        const BtnFacebook = Buttons.BtnFacebook.render();
        const BtnGoogle = Buttons.BtnGoogle.render();
        
        BtnSignIn.addEventListener('click', (event) => {
            event.preventDefault();
            this.handlerSignInClick();
        })

        return this.replaceSlot(
            template, 
            { key: 'slot[name="user-name"]', replacer: () => NameInput },
            { key: 'slot[name="user-surname"]', replacer: () => SurameInput  },
            { key: 'slot[name="phone"]', replacer: () => PhoneInput  },
            { key: 'slot[name="email"]', replacer: () => EmailInput  },
            { key: 'slot[name="user_password"]', replacer: () => PasswordInput  },
            { key: 'slot[name="btn_register"]', replacer: () => BtnRegister  },
            { key: 'slot[name="btn_signIn"]', replacer: () => BtnSignIn  },
            { key: 'slot[name="facebook"]', replacer: () => BtnFacebook  },
            { key: 'slot[name="google"]', replacer: () => BtnGoogle  }
        );
    }

    @AsFragment
    getTemplate() {
        return`
            <div class="wrapper-sign-up">
                <h1>Create your account</h1>
                <form class="registration_form" action="#">
                    <slot name="user-name"></slot>
                    <slot name="user-surname"></slot>
                    <slot name="phone"></slot>
                    <slot name="email"></slot>
                    <slot name="user_password"></slot>
                    <slot name="btn_register"></slot>
                    <slot name="btn_signIn"></slot>
                </form>
                <div class="another_authorization">
                    <h2>Login as user</h2>
                    <slot name="facebook"></slot>
                    <slot name="google"></slot>
                </div>
            </div>
        `
    }

    render() {
        return this.updateTemplate(this.getTemplate());
    }
    
    handlerSignInClick() {
        router.go('/sign-in');
    }
}




