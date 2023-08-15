import './signin.scss';
import {mutation_types, store} from "@/store/store";
import Component from "@/plugins/component";
import { AsFragment, BindEvent } from "@/common/decorators";
import axios from 'axios';
import InputSignIn from "@/common/components/input/input-sign-in";
import { router } from '@/router/router';

export default class SignIn extends Component {
    credentials = {};

    onInputChangeHandler(event) {
        const { value, name } = event.target;
        this.credentials[name] = value;
    }

    async onClickHandler(event) {
        store.dispatch(mutation_types.SET_IS_LOADING, true);

        const { login, password } = this.credentials;

        let response;

        if (login || password) {
            response = await this.onSignIn()
        }

        setTimeout(() => {
            store.dispatch(mutation_types.SET_IS_LOADING, false);
        }, 1000)
    }

    async onSignIn() {
        try {
            const response = await axios.post('http://localhost:9001/sign-in', this.credentials);
            if (response.status === 200) {
                store.dispatch(mutation_types.SET_SHOW_ALERT, {
                    type: 'alert-success',
                    message: 'Successful authorization'
                })
                store.dispatch(mutation_types.SET_USER_INFO, response.data);
                router.go('/');
            }

        } catch (error) {
            store.dispatch(mutation_types.SET_SHOW_ALERT, {
                type: 'alert-danger',
                message: error.message
            })
        }
    }

    updateTemplate(template) {
        const LoginInput = new InputSignIn({
            type: 'text',
            name: 'login',
            id: 'login',
            label: 'Login',
            onChange: this.onInputChangeHandler.bind(this)
        });

        const PasswordInput = new InputSignIn({
            type: 'password',
            name: 'password',
            id: 'password',
            label: 'Password',
            onChange: this.onInputChangeHandler.bind(this)
        });

        return this.replaceSlot(
            template,
            { key: 'slot[name="login"]', replacer: () => LoginInput.render() },
            { key: 'slot[name="password"]', replacer: () => PasswordInput.render() }
        );
    }

    @AsFragment
    getTemplate() {
           return `
            <div class="sign-in d-flex justify-content-center align-items-center">
                <div class="card col-6">
                    <div class="card-body">
                      <h5 class="card-title text-center mb-3"> Sign In </h5>
                       <slot name="login"></slot>
                       <slot name="password"></slot>
                      <button type="button" class="btn btn-success">Sign in</button>
                    </div>
                </div>
            </div>
        `
    }

    bindEvent(node) {
        node.querySelector('button').addEventListener(
            'click',
            this.onClickHandler.bind(this)
        )
    }

    @BindEvent
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}
