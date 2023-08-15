import Component from "@/plugins/component";
import { Buttons } from "@/common/components/button/buttonsSign-up";
import {AsFragment, BindEvent} from "@/common/decorators";
import { InputsForm } from "@/common/components/input/formElem";

export default class SearchComponent extends Component {
    titleRequestMov = '';

    constructor(...props) {
        super(...props)

    }

    updateTemplate(template) {
        const ButtonSearch = Buttons.BtnSearch.render();
        const MoviesSearch = InputsForm.SearchInput.render();
        return this.replaceSlot(
            template,
            { key: 'slot[name="inp-search"]', replacer: () => MoviesSearch },
            { key: 'slot[name="btn-search"]', replacer: () => ButtonSearch }
        )
    }

    @AsFragment 
    getTemplate() {
        return `
            <form class="d-flex ">
                <slot name="inp-search"></slot>
                <slot name="btn-search"></slot>
            </form>
        `
    }

    bindEvent(node) {
        node.querySelector('.btn-search')
            .addEventListener('click', this.serchHandler.bind(this));

        node.querySelector('#input_search') 
            .addEventListener('change', this.actionSearchHendler.bind(this));
    }

    @BindEvent
    render() {
        return this.updateTemplate(this.getTemplate());
    }

    serchHandler(event) {
        event.preventDefault();
        this.props.search(this.titleRequestMov);
    }

    actionSearchHendler(event) {
        this.titleRequestMov = event.target.value;
    }
}
