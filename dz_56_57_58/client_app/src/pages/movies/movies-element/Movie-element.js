import Component from "@/plugins/component";
import {AsFragment} from "@/common/decorators";

export default class MovieElement extends Component {
  constructor(...props) {
    super(...props)
  }

  getTemplate() {
    return `
      <div class="movie_card col-4" id="bright">
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src="${this.props.poster}"/>
            <h1>${this.props.title}</h1>
            <h4>${this.props.year}</h4>
          </div>
        </div>
        <div class="blur_back bright_back"></div>
      </div> 
      `;
    }

  @AsFragment
  render() {
    return this.getTemplate();
  }
}