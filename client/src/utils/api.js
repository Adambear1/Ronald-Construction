import axios from "axios"

export default {
    newInquiry: (data) => {
        return axios.post("/api/inquire", data)
    }
}