import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/histories',
        })
    }

    getHistories() {
        return this.api.get(`/`)
            .then(({ data }) => data);
    }

    getHistory(id) {
        return this.api.get(`/${id}`);
    }

    editHistory(id, body) {
        return this.api.put(`/${id}`, body);
    }

    createHistory(body) {
        console.log(body)
        return this.api.post(`/`, body);
    }

    deleteHistory(id) {
        return this.api.delete(`/${id}`);
    }
}

const api = new Api();

export default api;