export class DataBaseApi {
    static get url() {
        return 'https://nails-website-default-rtdb.firebaseio.com';
    }

    static getFieldDbUrl(endPoint) { 
       return  `${DataBaseApi.url}/${endPoint}.json`;
    }

    static async postRequest(endPoint, data) {
        try {
            const request = new Request(DataBaseApi.getFieldDbUrl(endPoint), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            return await _useRequest(request);
        } catch (error) {
            console.error(error)
        }
    }

    static async getRequest(endPoint) {
        try {
            const request = new Request(DataBaseApi.getFieldDbUrl(endPoint));
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