import {FormHTML} from '../core/index';
import {telegramMessageHTML} from '../templates/callback';
import {TelegramApi} from '../services/index';
export class CallBackForm extends FormHTML  {
    constructor(options) {
        super(options);
        
        this.$fileInput = this.$parent.querySelector(options.inputFileSel);
        
        this.toggleForm = this.toggleForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleImg = this.handleImg.bind(this);
    }

    init() {
        console.log('init callback', this)
        super.init();
        this.$form.addEventListener('submit', this.onSubmit);
        this.$fileInput.addEventListener('change', this.handleImg);
    }

    async onSubmit(e) {
        e.preventDefault();
        const formData = this.getFormValue();
        formData.date = new Date();

        console.log(formData)

        if(!this.isValid()) return;
        console.log(telegramMessageHTML(formData))

        try {
            await TelegramApi.sendMessage(telegramMessageHTML(formData))
            this.successSendData();
        } catch(err) {
            this.errorSendData();
        }
        
        if(this.file) await TelegramApi.sendImage(this.file)
        
        this.clear()
    }

    async handleImg(e) {
        const file = Array.from(e.target.files)[0];
        this.file = file;
    }
}