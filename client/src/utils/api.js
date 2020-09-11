import axios from "axios"

export default {
    newInquiry: (data) => {
        return axios.post("https://localhost:5000/api/inquire", data)
    }
}