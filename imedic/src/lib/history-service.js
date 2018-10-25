import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000',
        })
    }

    gethistory() {
        return this.api.get(`/history`)
            .then(({ data }) => data);
    }

    getHistory(id) {
        return this.api.get(`/history/${id}`);
    }

    editHistory(id, body) {
        return this.api.put(`/history/${id}`, body);
    }

    createHistory(body) {
        return this.api.post('/history', body);
    }

    deleteHistory(id) {
        return this.api.delete(`/history/${id}`);
    }
}

const api = new Api();

export default api;