import {FormHTML, ComponentHTML} from '../core/index';
import {DataBaseApi, TelegramApi} from '../services/index';
import {cardTemplateHTML, telegramMessageHTML} from '../templates/recording';
import SimplePicker from 'simplepicker';
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

export class FormRecording extends FormHTML {
    constructor(options) {
        super(options);

        this.$dataTime = this.$form.querySelector('.dataTimePicker');
        this.dateTimePicker = new SimplePicker({
            zIndex: 10
        });

        this.toggleForm = this.toggleForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDataTimeClick = this.onDataTimeClick.bind(this);
    }

    init() {
        super.init();

        console.log('recording form init', this)

        this.$form.addEventListener('submit', this.onSubmit);
        this.$dataTime.addEventListener('click', this.onDataTimeClick);
        this.$parent.addEventListener('click', this.toggleForm);

        this.dateTimePicker.on('submit', (data) => {
            this.timeDateData = data;
        });
    }

    async onSubmit(e) {
        e.preventDefault();

        const formData = this.getFormValue();
        formData.date = new Date();
        formData.recordDate = this.timeDateData;
        formData.type = this.service.dataset.type;

        console.log('recording', formData);
        
        if(!this.isValid()) return;
        try {
            TelegramApi.sendMessage(telegramMessageHTML(formData))
            await DataBaseApi.postRequest(this.apiPoint, formData);
            this.successSendData();
        } catch(err) {
            console.error(err);
            this.errorSendData();
        }
       
        this.clear();
        this.hide();
    }

    toggleForm(e) {
        const service = e.target.closest('.service');
        if(e.target.tagName === 'A' && service) {
            this.service = service;
            console.log('form button toggle')
            e.preventDefault();
            super.toggleForm();
        }
    }

    onDataTimeClick(e) {
        console.log('show time picker');
        this.dateTimePicker.open();
    }

    destroy() {
        this.$showBtn.removeEventListener('click', this.toggleForm);
        this.$form.removeEventListener('submit', this.onSubmit);
        this.$dataTime.removeEventListener('click', this.onDataTimeChange);
        this.$parent.removeEventListener('click', this.toggleForm);
    }
}