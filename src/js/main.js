import FeedbackHTML, {FormFeedBack} from './modules/feedback';
import {Validators} from './core/index';
import {CallBackForm} from './modules/callback';
import RecordingCardsHTML from './modules/recording';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('load')
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
    } else if(document.location.pathname === '/connection.html') {
        new CallBackForm({
            parentSel: '.callback',
            formSel: '.callback-form',
            submitBtnSel: '.callback-form-submit',
            inputFileSel: '.callback-form-file',
            controls: {
                topic: [],
                email: [Validators.required],
                name: [Validators.required],
                address: [],
                telephone: [],
                message: [Validators.required],
            }
        }).init();
    } else if(document.location.pathname === '/recording.html') {
        console.log('Recording')
        new RecordingCardsHTML({parentSel: '.recording-list', apiPoint: 'services'}).init()
    }
});