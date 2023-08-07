import { AsFragment } from '@/common/decorators';
import Component from "@/plugins/component";

class Button extends Component {
    constructor(...props) {
        super(...props);
    }

    @AsFragment
    getTemplate() {
        return `<button class="${this.props.class}">${this.props.value}</button>`
    }

    render() {
        return this.getTemplate();
    }
}

export default Button;


