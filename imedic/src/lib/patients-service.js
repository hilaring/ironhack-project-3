import axios from 'axios';

class Api {
    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000',
            // https://imedic-ih.herokuapp.com
        })
    }

    getPatients() {
        return this.api.get(`/patients`)
            .then(({ data }) => data);
    }

    getPatient(id) {
        return this.api.get(`/patients/${id}`);
    }

    editPatient(id, body) {
        console.log('desde service: ', body)
        return this.api.put(`/patients/${id}`, body);
    }

    addHistory(id, body) {
        return this.api.put(`/patients/add-history/${id}`, body);
    }

    createPatient(body) {
        return this.api.post(`/patients`, body);
    }

    deletePatient(id) {
        return this.api.delete(`/patients/${id}`);
    }
}

const api = new Api();

export default api;