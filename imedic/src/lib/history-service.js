import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000',
        })
    }

    getHistories() {
        return this.api.get(`/histories`)
            .then(({ data }) => data);
    }

    getHistory(id) {
        return this.api.get(`/histories/${id}`);
    }

    editHistory(id, body) {
        return this.api.put(`/histories/${id}`, body);
    }

    createHistory(body) {
        return this.api.post('/histories', body);
    }

    deleteHistory(id) {
        return this.api.delete(`/histories/${id}`);
    }
}

const api = new Api();

export default api;