const TEL_TOKEN = '1806725342:AAEl5-Ze33o90DsyJgZHQKmsQ_sWV-kFq3U';
const CHAT_ID = '-585855745';

export default class TelegramApi {
    constructor(chatId) {
        this.chatId = chatId || CHAT_ID;
    }

    static setChatId(chatId) {
        TelegramApi.chatId = chatId;
    }

    static getBaseUrl() {
        return 'https://api.telegram.org/bot'
    }

    static apiUrl(token, endPoint, querys = '') {
        return `${TelegramApi.getBaseUrl()}${token}/${endPoint}${querys}`
    }

    static getChatId() {
        return TelegramApi.chatId;
    }

    static async getUpdates() {
        try {
            const request = new Request(TelegramApi.apiUrl(TEL_TOKEN, 'getUpdates'), {method: 'GET'});
            return await _useRequest(request);
        } catch (err) {
            console.error(err);
        }
    }

    static async sendMessage(message) {
        try {
            const request = new Request(TelegramApi.apiUrl(TEL_TOKEN, 'sendMessage', `?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`));
            return await _useRequest(request);
        } catch(err) {
            console.error(err);
        }
    }
}

async function _useRequest(request) {
    const response = await fetch(request);
    return await response.json()
}