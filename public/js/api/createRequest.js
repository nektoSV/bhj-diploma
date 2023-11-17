/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    let xhr = new XMLHttpRequest();
    const { method, url, data, callback } = options;
    xhr.responseType = "json";

    try {
        if (method === 'GET') {
            xhr.open(method, url + getStringifyData(data));
            xhr.send();
        } else {
            xhr.open(method, url);
            xhr.send(getFormData(data));
        }
    } catch (err) {
        if (callback) callback(err);
    }


    function getStringifyData(data) {
        if (!data) {
            return '';
        }

        let strData = '';
        let index = 0;

        for (let key in data) {
            strData += (index > 0 ? '&' : '?') + key + '=' + data[key];
        }

        return strData;
    }
}


function getFormData(data) {
    if (!data) {
        return '';
    }
    const formData = new FormData();

    for (let key in data) {
        formData.append(key, data[key]);
    }
    return formData;
}



