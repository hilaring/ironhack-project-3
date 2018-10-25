import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000',
        })
    }

    gethistory() {
        return this.api.get(`/historys`)
            .then(({ data }) => data);
    }

    getHistory(id) {
        return this.api.get(`/historys/${id}`);
    }

    editHistory(id, body) {
        return this.api.put(`/historys/${id}`, body);
    }

    createHistory(body) {
        return this.api.post('/historys', body);
    }

    deleteHistory(id) {
        return this.api.delete(`/historys/${id}`);
    }
}

const api = new Api();

export default api;