import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://iot-backend-latest.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance
