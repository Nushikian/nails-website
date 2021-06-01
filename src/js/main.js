import FeedbackHTML, {FormFeedBack} from './modules/feedback';
import {Validators} from './core/index';
import {CallBackForm} from './modules/callback';
import RecordingCardsHTML, {FormRecording} from './modules/recording';
import {success, error} from './core/message';
import fullPage from 'fullpage.js';

document.addEventListener('DOMContentLoaded', async () => {
    if(document.location.pathname === '/') {
        new fullPage('#fullpage', {
            //options here
            autoScrolling:true,
            scrollHorizontally: true
        });
    } else if(document.location.pathname === '/services.html') {
        new fullPage('#fullpage', {
            //options here
            autoScrolling:true,
            scrollHorizontally: true
        });
    } else if(document.location.pathname === '/feedback.html') {
        new FeedbackHTML({parentSel: '.layout', apiPoint: 'feedbacks'}).init()
        const formFeedBack = new FormFeedBack({
            parentSel: '.feedback-wrapper',
            formSel: '.feedback-form',
            apiPoint: 'feedbacks',
            submitBtnSel: '.feedback-form-submit',
            controls: {
                name: [Validators.required],
                service: [Validators.required],
                feedback: [Validators.required],
            }
        });

        formFeedBack.onSuccessSendData = () => {
            success(' Your feedback was sent successfully')
        }

        formFeedBack.onErrorSendData = () => {
            error()
        }

        formFeedBack.init();
    } else if(document.location.pathname === '/connection.html') {
        const callBackForm = new CallBackForm({
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
        });

        callBackForm.onSuccessSendData = () => {
            success('We will contact you soon');
        }

        callBackForm.onErrorSendData = () => {
            error()
        }

        callBackForm.init();
    } else if(document.location.pathname === '/recording.html') {
        new RecordingCardsHTML({parentSel: '.recording-list', apiPoint: 'services'}).init()
        const formRecording = new FormRecording({
            parentSel: '.recording',
            formSel: '.recording-form',
            submitBtnSel: '.recording-form-submit',
            apiPoint: 'appointments',
            controls: {
                name: [Validators.required],
                telephone: [Validators.required],
                wishes: [],
            }
        });

        formRecording.onSuccessSendData = () => {
            success('Your successfully appointment on service');
        }

        formRecording.onErrorSendData = () => {
            error()
        }

        formRecording.init();
    }
});