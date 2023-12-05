/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    xhr.responseType = 'json';

    if (options.method === "GET") {
        options.url += '?';

        for (let key in options.data) {
            options.url += `${key}=${options.data[key]}&`;
        }
    } else {
        for (let key in options.data) {
            formData.append(key, options.data[key]);


        }

    }

    try {
        xhr.open(options.method, options.url);
        xhr.send(formData);

    }

    catch (err) {
        options.callback(err);
        console.log(err)

    }


    xhr.addEventListener('load', () => {
        options.callback(null, xhr.response);

    });

};
    
    
    









