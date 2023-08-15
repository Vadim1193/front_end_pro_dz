import './Movies.scss'
import Component from "@/plugins/component";
import {AsFragment, SaveContainer} from "@/common/decorators";
import Header from "@/pages/movies/header/Header";
import HttpService from '@/common/servies/Http.service';
import MoviesCollection from '@/pages/movies/movies-collection/movies-collection';

export default class Movies extends Component {
    collectionFilms = [];

    updateTemplate(template) {
        const header = new Header({
            search: this.updateMovies.bind(this)
        });

        const moviesCol = new MoviesCollection({
            collectionFilms: this.collectionFilms
        });
        
        return this.replaceSlot(
            template,
            { key: 'slot[name="header"]', replacer: () => header.render() },
            { key: 'slot[name="movies-list"]', replacer: () => moviesCol.render() },
        );
    }

    updateMovies(titleRequestMov) {
        this.searchMovies(titleRequestMov)
        .then(() => {
            this.changeMovies();
            this.renderMoviesList();
        })
    }

    async searchMovies(titleRequestMov) {
        const query = this.getUrlParams({ titleRequestMov });
        const url = `/search-movies?${query}`;
        const {data} = await HttpService.get(url);

        if(data['Response'].toLowerCase() === 'true') {
            this.collectionFilms = data['Search'];
        }

        return this.collectionFilms;
    }

    changeMovies() {
        if (!this.collectionFilms) return [];
        
        this.collectionFilms = this.collectionFilms.map(film => ({
            poster: film['Poster'],
            title: film['Title'],
            type: film['Type'],
            year: film['Year'],
            id: film['imdbID']
        }))

        return this.collectionFilms;
    }

    getUrlParams(params) {
        return new URLSearchParams(params).toString();
    }

    updatingContainer(container, content) {
        container.innerHTML = '';
        container.append(content);

    }

    renderMoviesList() {
        const FilmsContainer = this.$container.querySelector('.result-search');
        const collectionFilmsNode = new MoviesCollection({
            collectionFilms: this.collectionFilms
        }).render();

        this.updatingContainer(FilmsContainer, collectionFilmsNode)
    }

    @AsFragment
    getTemplate() {
        return `
            <main class="movies-page">
                <slot name="header"></slot>
                <div class="result-search">
                    <slot name="movies-list"></slot>
                </div>
            </main>
        `
    }

    @SaveContainer
    render() {
        return this.updateTemplate(
            this.getTemplate()
        );
    }
}