import {FormHTML, ComponentHTML} from '../core/index';
import {DataBaseApi} from '../services/index';
import {cardTemplateHTML} from '../templates/recording';

export default class RecordingCardsHTML extends ComponentHTML {
    constructor(options) {
        super(options)
    }

    async init() {
        console.log(this)
        const data = await this.loadData();
        this.clear()
        this._renderPosts(data)
    }

    createHTML(card) {
        return cardTemplateHTML(card)
    }

    _renderPosts(data) {
        DataBaseApi.normalizeData(data).forEach(card => {
            this.insert(this.createHTML(card));
        });
    }
}