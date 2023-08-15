import './movies-collection.scss'
import Component from "@/plugins/component";
import {AsFragment, SaveContainer} from "@/common/decorators";
import MovieElement from "@/pages/movies/movies-element/Movie-element";

export default class MoviesCollection extends Component {

    constructor(...props) {
        super(...props);
    }

    @AsFragment
    getTemplate() {
        const isMoviesPresent = Boolean(this.props.collectionFilms.length);
        return `
            <div class="movies-list row">
                ${isMoviesPresent && `<slot name="movies"></slot>` || ''}
                ${!isMoviesPresent && `<div class="no-movies">No movies found</div>` || ''}
            </div>
        `
    }

    makeMovieItems() {
        return this.props.collectionFilms.map(film => new MovieElement(film).render());
    }

    updateTemplate(template) {
        if (this.props.collectionFilms.length) {
            return this.replaceSlot(
                template,
                { key: 'slot[name="movies"]', replacer: () => this.makeMovieItems()},
            );
        }

        return template;
    }

    @SaveContainer
    render() {
        return this.updateTemplate(this.getTemplate());
    }
}