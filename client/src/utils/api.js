import axios from "axios"

export default {
    newInquiry: (data) => {
        return axios.post("/ap/inquire", data)
    }
}