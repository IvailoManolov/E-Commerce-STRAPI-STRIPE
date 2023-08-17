import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "http://localhost:5566/api",
    headers: {
        Authorization: "bearer " + "703b0f26ffcfbfdb5361b7c666f26fe328555b1b7ad061012ed8ded1ebbc7a54a7ccce48d3e4b1d773b8df9696ca9763ad0b1dc77643e460ba1b89f3c0d27c10ba1514eb3a17147d4aa275d16887bcf64c830fe9872b067e3e36acaaa26c35cddb0fa2ee43e2717e36ac556974893459816cd00adcbafd93d9fbf0723166f023",
    }
});
