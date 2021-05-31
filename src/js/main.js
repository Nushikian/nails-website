import FeedbackHTML, {FormFeedBack} from './modules/feedback';
import {Validators} from './core/index';
import {TelegramApi} from './services/index'

document.addEventListener('DOMContentLoaded', async () => {
    if(document.location.pathname === '/feedback.html') {
        new FeedbackHTML({parentSel: '.layout', apiPoint: 'feedbacks'}).init()
        new FormFeedBack({
            parentSel: '.feedback-wrapper',
            formSel: '.feedback-form',
            apiPoint: 'feedbacks',
            submitBtnSel: '.feedback-form-submit',
            controls: {
                name: [Validators.required],
                service: [Validators.required],
                feedback: [Validators.required],
            }
        }).init();
    }
});