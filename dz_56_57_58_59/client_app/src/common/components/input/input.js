import { AsFragment } from "@/common/decorators";
import './input.scss';
import Component from "@/plugins/component";


class Input extends Component {
    constructor(...props) {
        super(...props);
    }

    @AsFragment
    getTemplate() {
        return `
            <div class="${this.props.parentClass}">
                ${this.props.label ? `<label>${this.props.label}</label>` : ''}
                <input type="${this.props.type}"
                    id="${this.props.id}"
                    name="${this.props.name}" 
                    ${this.props.placeholder ? `placeholder="${this.props.placeholder}" ` : ''}
                    autocomplete="${this.props.autocomplete}"
                    ${this.props.required ? 'required' : ''}
                    ${this.props.value ? `value="${this.props.value}"` : ''}
                >
            </div>
        `
    }

    render() {
        return this.getTemplate();
    }

}

export default Input;

