import Component from "@/plugins/component";
import './sign-up.scss';

export default class SignUp extends Component {
    render() {
        return` 
            <div class="wrapper-sign-up">
                <h1>Create your account</h1>
                <form class="registration_form" action="#">
                    <div class="name">
                        <label>Name:</label>
                        <input type="text" name="user-name" placeholder="Name" autocomplete="off" required>
                    </div>
                    <div class="surname">
                        <label>Surname:</label>
                        <input type="text" name="user-surname" placeholder="Your surname" autocomplete="off" required>
                    </div>
                    <div class="user_phone">
                        <label>Phone number:</label>
                        <input type="tel" name="phone" value="+380" autocomplete="off">
                    </div>
                    <div class="user_email">
                        <label>Email mail:</label>
                        <input type="email" name="email" placeholder="example@example.com" autocomplete="off" required>
                    </div>
                    <div class="user_password">
                        <label>Create a password:</label>
                        <input type="password" name="password-user" autocomplete="off" required>
                    </div>
                    <button class="btn-register">Register</button>
                </form>
                <div class="another_authorization">
                    <h2>Login as user</h2>
                    <button class="btn-facebook">
                        Facebook
                    </button>
                    <button class="btn-google">
                        Google
                    </button>
                </div>
            </div>
        `
    }
}

const findForm = () => document.querySelector('.registration_form');

const renderComponent = (Component) => {
    document.querySelector('#app').innerHTML = new Component();
}

renderComponent(SignUp);

function serializeForm(form) {
    const data = [...form].reduce((acc, item) => {
        if (item.tagName.toLowerCase() === 'button') {
            return acc;
        }
        
        return { ...acc, [item.name]: item.value };

    }, {});
    return data;
}

const btnRegister = document.querySelector('.btn-register');

btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const form = findForm();
    const formData = serializeForm(form);
    console.log(formData, 'formData');
});


