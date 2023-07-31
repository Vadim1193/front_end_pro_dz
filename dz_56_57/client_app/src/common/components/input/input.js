import { AsFragment } from '../../decorators';
import './input.scss';
import Component from "@/plugins/component";


class Input extends Component {
    constructor(...props) {
        super(...props);
    }

    // onChangeHandler() {
    //     console.log(123);
    // }

    // updateTemplate() {
    // }

    @AsFragment
    getTemplate() {
        return `
            <div class="${this.props.parentClass}">
                <label>
                    ${this.props.label}
                </label>
                <input type="${this.props.type}" 
                    name="${this.props.name}" 
                    ${this.props.placeholder ? `placeholder="${this.props.placeholder}" ` : ''}
                    autocomplete="${this.props.autocomplete}"
                    ${this.props.required ? 'required' : ''}
                    ${this.props.value ? `value="${this.props.value}"` : ''}
                >
            </div>
        `
    }

    bindEvent(node) {
        // node.querySelector('input').addEventListener('click', this.onChangeHandler);
        return node;
    }

    render() {
        return this.bindEvent(this.getTemplate());
    }

}

export default Input;

