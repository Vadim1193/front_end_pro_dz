import Input from "./input";

export const InputsForm = {

  NameInput: new Input({
    parentClass: 'name',
    type: 'text',
    name: 'user-name',
    placeholder: 'Name',
    autocomplete: 'off',
    required: true,
    label: 'Name:',
  }),
  
  SurameInput: new Input({
    parentClass: 'surname',
    type: 'text',
    name: 'user-surname',
    placeholder: 'Your surname',
    autocomplete: 'off',
    required: true,
    label: 'Surname:',
  }),

  PhoneInput: new Input({
    parentClass: 'user_phone',
    type: 'tel',
    name: 'phone',
    autocomplete: 'off',
    label: 'Phone number:',
    value: '+380',
  }),

  EmailInput: new Input({
    parentClass: 'user_email',
    type: 'email',
    name: 'email',
    placeholder: 'example@example.com',
    autocomplete: 'off',
    label: 'Email mail:',
    required: true,
  }),

  PasswordInput: new Input({
    parentClass: 'user_password',
    label: 'Create a password:',
    type: 'password',
    name: 'password-user',
  }),
}

