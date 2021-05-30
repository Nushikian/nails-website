export class DataBaseApi {
    url = 'https://nails-website-default-rtdb.firebaseio.com';

    get url() {
        return this.url;
    }

    getFieldDbUrl(endPoint) { 
       return  `${this.url}/${endPoint}.json`;
    }

    static postRequest(endPoint) {
        try {
            const request = new Request(this.getFieldDbUrl(endPoint), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await _useRequest(request)
        } catch (error) {
            console.error(error)
        }
    }

    static async getRequest(endPoint) {
        try {
            const request = new Request(this.getFieldDbUrl(endPoint));
            return await _useRequest(request);
        } catch (error) {
            console.error(error);
        }
    }

    static normalizeData(fbData) {
        const array = Object.keys(fbData).map( fbKey => _transform(fbKey, fbData));

        return array;
    }
}

async function _useRequest(request) {
    const response = await fetch(request);
    return await response.json()
}

function _transform(fbKey, fbData) {
    const dataInf = {...fbData[fbKey]};
    dataInf['id'] = fbKey;

    return dataInf
} 