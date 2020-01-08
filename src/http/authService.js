import axios from "axios";

const BASE_URL = "http://localhost:8000/api";



export function login(email, password) {
    return axios.post(`${BASE_URL}/account/login`, {
        email,
        password
    }
    );
}

export function register({ name, email, password, phone }) {
    return axios.post(`${BASE_URL}/account`, {
        name,
        email,
        password,
        phone: phone ? phone : null,
    });
}

export function postOrder(order) {
    return axios.post(`${BASE_URL}/order`, {
        order

    });
}
export function putOrder(order, id) {
    return axios.put(`${BASE_URL}/order/${id}`, {
        order

    });
}

export function getProducts({ productName }) {
    return axios.post(`${BASE_URL}/product/${productName}`);
}

export function getBill({ order }) {
    return axios.get(`${BASE_URL}/bill/${order}`);
}

export function updatesTable() {
    return axios.get(`${BASE_URL}/table/status`);
}